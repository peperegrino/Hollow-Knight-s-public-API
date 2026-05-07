import { Text, View } from 'react-native';
import { COLORS, FONTS } from '../../src/styles/theme';

export default function ExploreScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: COLORS.primary, fontFamily: FONTS.heading, fontSize: 24 }}>EM BREVE</Text>
      <Text style={{ color: COLORS.textSecondary, fontFamily: FONTS.body }}>Mapa de Hallownest</Text>
    </View>
  );
}