import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../styles/theme';

export default StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
    gap: SPACING.md,
  },
  loadingText: {
    fontFamily: FONTS.body,
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: SPACING.md,
    letterSpacing: 1,
  },
  errorIcon: {
    fontSize: 48,
    color: COLORS.danger,
  },
  errorTitle: {
    fontFamily: FONTS.subheading,
    fontSize: 18,
    color: COLORS.textPrimary,
  },
  errorMessage: {
    fontFamily: FONTS.body,
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  retryBtn: {
    marginTop: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  retryText: {
    fontFamily: FONTS.bodyBold,
    fontSize: 14,
    color: COLORS.primary,
    letterSpacing: 1,
  },
  emptyIcon: {
    fontSize: 48,
    opacity: 0.2,
    color: COLORS.textPrimary, // Adicionado para garantir visibilidade
  },
  emptyText: {
    fontFamily: FONTS.body,
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});