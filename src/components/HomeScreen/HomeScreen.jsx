import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { getBosses, getFriendlyNPCs, getLocations } from '../../services/api';
import Card from '../Card/Card';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import { EmptyState, ErrorState, LoadingState } from '../StateComponents/Loadstate';
import styles from './Style'; // Importação do arquivo de estilos

const TABS = [
  { key: 'bosses',    label: 'Chefes',  type: 'boss' },
  { key: 'npcs',      label: 'NPCs',    type: 'npc' },
  { key: 'locations', label: 'Locais',  type: 'location' },
];

const FAVORITES_KEY = 'hk_favorites';

export default function HomeScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('bosses');
  const [data, setData] = useState({ bosses: [], npcs: [], locations: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState({});

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [bosses, npcs, locations] = await Promise.all([
        getBosses(),
        getFriendlyNPCs(),
        getLocations(),
      ]);
      setData({ bosses, npcs, locations });
    } catch (err) {
      setError(err.message || 'Erro ao carregar dados da API.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  useEffect(() => {
    AsyncStorage.getItem(FAVORITES_KEY).then((stored) => {
      if (stored) setFavorites(JSON.parse(stored));
    });
  }, []);

  const toggleFavorite = async (id, type) => {
    const key = `${type}_${id}`;
    const updated = { ...favorites, [key]: !favorites[key] };
    if (!updated[key]) delete updated[key];
    setFavorites(updated);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  const currentTab = TABS.find((t) => t.key === activeTab);
  const rawList = data[activeTab] || [];
  const filtered = search.trim()
    ? rawList.filter((i) => i.name?.toLowerCase().includes(search.toLowerCase()))
    : rawList;

  const handlePress = (item) => {
    navigation.navigate('details', {
      item,
      type: currentTab.type,
    });
  };

  return (
    <SafeAreaView style={styles.root} edges={['top']}>
      <Header title="Hallownest" subtitle="Hollow Knight Database" />

      {/* Navegação por Abas */}
      <View style={styles.tabs}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, activeTab === tab.key && styles.tabActive]}
            onPress={() => { setActiveTab(tab.key); setSearch(''); }}
          >
            <Text style={[styles.tabText, activeTab === tab.key && styles.tabTextActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <SearchBar
        value={search}
        onChangeText={setSearch}
        onClear={() => setSearch('')}
      />

      {/* Estados de Carregamento e Lista */}
      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchData} />
      ) : filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Card
              item={item}
              type={currentTab.type}
              onPress={() => handlePress(item)}
              isFavorite={!!favorites[`${currentTab.type}_${item.id}`]}
              onToggleFavorite={toggleFavorite}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}