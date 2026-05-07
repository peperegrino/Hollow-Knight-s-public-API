import { StyleSheet } from 'react-native';
import { COLORS, FONTS, RADIUS, SPACING } from '../../styles/theme';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scroll: {
    paddingBottom: SPACING.xxl,
  },
  image: {
    width: '100%',
    height: 240,
    backgroundColor: COLORS.surface,
  },
  imagePlaceholder: {
    width: '100%',
    height: 240,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderIcon: {
    fontSize: 64,
    opacity: 0.15,
  },
  content: {
    padding: SPACING.lg,
  },
  typePill: {
    alignSelf: 'flex-start',
    paddingHorizontal: SPACING.md,
    paddingVertical: 4,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    marginBottom: SPACING.sm,
  },
  typeText: {
    fontFamily: FONTS.bodyBold,
    fontSize: 11,
    letterSpacing: 2,
  },
  name: {
    fontFamily: FONTS.heading,
    fontSize: 26,
    color: COLORS.textPrimary,
    letterSpacing: 1,
    marginBottom: SPACING.md,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.md,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.sm,
  },
  infoLabel: {
    fontFamily: FONTS.body,
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  infoValue: {
    fontFamily: FONTS.bodyBold,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  favBtn: {
    marginTop: SPACING.md,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
  },
  favBtnActive: {
    backgroundColor: COLORS.primary,
  },
  favBtnText: {
    fontFamily: FONTS.bodyBold,
    fontSize: 15,
    color: COLORS.primary,
    letterSpacing: 1,
  },
  favBtnTextActive: {
    color: COLORS.black,
  },
});