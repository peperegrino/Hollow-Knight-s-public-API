import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { getBossById, getLocationById, getNPCById } from '../../services/api';
import { COLORS } from '../../styles/theme';
import Header from '../Header/Header';
import { ErrorState, LoadingState } from '../StateComponents/Loadstate';
import styles from './Style'; // Importação dos estilos

const FAVORITES_KEY = 'hk_favorites';

const TYPE_CONFIG = {
  boss:     { label: 'Chefe',  color: COLORS.boss,     fetcher: getBossById },
  npc:      { label: 'NPC',    color: COLORS.npc,      fetcher: getNPCById },
  location: { label: 'Local',  color: COLORS.location, fetcher: getLocationById },
};

export default function DetailsScreen({ navigation, route }) {
  const { item: initialItem, type } = route.params;
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.boss;

  const [item, setItem] = useState(initialItem);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const favKey = `${type}_${initialItem.id}`;

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const detail = await config.fetcher(initialItem.id);
        setItem(detail);
      } catch {
        // Fallback para os dados da rota em caso de erro na API
      } finally {
        setLoading(false);
      }
    };
    
    fetchDetail();

    AsyncStorage.getItem(FAVORITES_KEY).then((stored) => {
      if (stored) {
        const favs = JSON.parse(stored);
        setIsFavorite(!!favs[favKey]);
      }
    });
  }, []);

  const toggleFavorite = async () => {
    const stored = await AsyncStorage.getItem(FAVORITES_KEY);
    const favs = stored ? JSON.parse(stored) : {};
    const next = !isFavorite;
    
    if (next) favs[favKey] = true;
    else delete favs[favKey];
    
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
    setIsFavorite(next);
  };

  if (loading) return <LoadingState message="Carregando detalhes..." />;
  if (error) return <ErrorState message={error} onRetry={() => navigation.goBack()} />;

  return (
    <SafeAreaView style={styles.root} edges={['top']}>
      <Header
        title={item.name}
        subtitle={config.label}
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Seção de Imagem */}
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.placeholderIcon}>⚔</Text>
          </View>
        )}

        {/* Conteúdo da Info */}
        <View style={styles.content}>
          <View style={[styles.typePill, { borderColor: config.color, backgroundColor: config.color + '22' }]}>
            <Text style={[styles.typeText, { color: config.color }]}>{config.label.toUpperCase()}</Text>
          </View>

          <Text style={styles.name}>{item.name}</Text>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ID</Text>
            <Text style={styles.infoValue}>#{item.id}</Text>
          </View>

          {item.location_id !== undefined && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Localização</Text>
              <Text style={styles.infoValue}>Local #{item.location_id}</Text>
            </View>
          )}

          <View style={styles.divider} />

          {/* Botão de Favorito */}
          <TouchableOpacity
            style={[styles.favBtn, isFavorite && styles.favBtnActive]}
            onPress={toggleFavorite}
          >
            <Text style={[styles.favBtnText, isFavorite && styles.favBtnTextActive]}>
              {isFavorite ? '★  Favoritado' : '☆  Favoritar'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}