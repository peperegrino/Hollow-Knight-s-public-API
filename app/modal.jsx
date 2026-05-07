import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, RADIUS, SPACING } from '../src/styles/theme';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações</Text>
      
      <View style={styles.divider} />
      
      <Text style={styles.description}>
        Este é um banco de dados sobre Hallownest. 
        Aqui você encontrará detalhes sobre chefes, NPCs e localizações.
      </Text>

      <Link href="/" dismissTo style={styles.link}>
        <Text style={styles.linkText}>Voltar para o início</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
    backgroundColor: COLORS.background,
  },
  title: {
    fontFamily: FONTS.heading,
    fontSize: 24,
    color: COLORS.primary,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  divider: {
    height: 2,
    width: 40,
    backgroundColor: COLORS.primaryDark,
    marginVertical: SPACING.md,
  },
  description: {
    fontFamily: FONTS.body,
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: SPACING.xl,
  },
  link: {
    marginTop: SPACING.lg,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: RADIUS.full,
  },
  linkText: {
    fontFamily: FONTS.bodyBold,
    color: COLORS.primary,
    fontSize: 14,
    letterSpacing: 1,
  },
});