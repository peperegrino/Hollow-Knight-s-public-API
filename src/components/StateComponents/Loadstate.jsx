import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../styles/theme';
import styles from './Style'; // Importação dos estilos

export function LoadingState({ message = 'Carregando Hallownest...' }) {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={COLORS.primary} />
      <Text style={styles.loadingText}>{message}</Text>
    </View>
  );
}

export function ErrorState({ message, onRetry }) {
  return (
    <View style={styles.center}>
      <Text style={styles.errorIcon}>✕</Text>
      <Text style={styles.errorTitle}>Algo deu errado</Text>
      <Text style={styles.errorMessage}>{message}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.retryBtn} onPress={onRetry}>
          <Text style={styles.retryText}>Tentar novamente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export function EmptyState({ message = 'Nenhum resultado encontrado.' }) {
  return (
    <View style={styles.center}>
      <Text style={styles.emptyIcon}>⚔</Text>
      <Text style={styles.emptyText}>{message}</Text>
    </View>
  );
}