import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../styles/theme';
import styles from './Style'; // Importação do arquivo de estilos

const TYPE_CONFIG = {
  boss:     { label: 'CHEFE',  color: COLORS.boss,     light: COLORS.bossLight },
  npc:      { label: 'NPC',    color: COLORS.npc,      light: COLORS.npcLight },
  location: { label: 'LOCAL',  color: COLORS.location, light: COLORS.locationLight },
};

export default function Card({ item, type, onPress, isFavorite, onToggleFavorite }) {
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.boss;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      {/* Badge de Tipo */}
      <View style={[styles.typeBadge, { backgroundColor: config.color + '22', borderColor: config.color }]}>
        <Text style={[styles.typeLabel, { color: config.light }]}>{config.label}</Text>
      </View>

      {/* Imagem ou Placeholder */}
      {item.image ? (
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderIcon}>⚔</Text>
        </View>
      )}

      {/* Informações */}
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
        {item.location_id !== undefined && (
          <Text style={styles.meta}>Local #{item.location_id}</Text>
        )}
      </View>

      {/* Botão de Favorito */}
      <TouchableOpacity
        style={styles.favoriteBtn}
        onPress={() => onToggleFavorite && onToggleFavorite(item.id, type)}
        accessibilityLabel={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        <Text style={[styles.favoriteIcon, isFavorite && styles.favoriteFilled]}>
          {isFavorite ? '★' : '☆'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}