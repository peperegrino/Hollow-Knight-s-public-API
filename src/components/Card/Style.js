import { StyleSheet } from 'react-native';
import { COLORS, FONTS, RADIUS, SHADOWS, SPACING } from '../../styles/theme';

export default StyleSheet.create({
  card: {
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.lg,
    marginHorizontal: SPACING.md,
    marginVertical: SPACING.sm,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.card,
  },
  typeBadge: {
    position: 'absolute',
    top: SPACING.sm,
    left: SPACING.sm,
    zIndex: 2,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    borderRadius: RADIUS.full,
    borderWidth: 1,
  },
  typeLabel: {
    fontFamily: FONTS.bodyBold,
    fontSize: 10,
    letterSpacing: 1.5,
  },
  image: {
    width: '100%',
    height: 160,
    backgroundColor: COLORS.surface,
  },
  imagePlaceholder: {
    width: '100%',
    height: 160,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderIcon: {
    fontSize: 48,
    opacity: 0.3,
  },
  info: {
    padding: SPACING.md,
  },
  name: {
    fontFamily: FONTS.subheading,
    fontSize: 16,
    color: COLORS.textPrimary,
    letterSpacing: 0.5,
  },
  meta: {
    fontFamily: FONTS.body,
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
  favoriteBtn: {
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
    zIndex: 2,
    padding: SPACING.xs,
  },
  favoriteIcon: {
    fontSize: 24,
    color: COLORS.textMuted,
  },
  favoriteFilled: {
    color: COLORS.primary,
  },
});
