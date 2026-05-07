import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../styles/theme';
import styles from './Style'; // Importação do arquivo de estilos

export default function SearchBar({ value, onChangeText, placeholder, onClear }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>⚲</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder || 'Buscar em Hallownest...'}
        placeholderTextColor={COLORS.textMuted}
        returnKeyType="search"
        autoCorrect={false}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear} accessibilityLabel="Limpar busca">
          <Text style={styles.clear}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}