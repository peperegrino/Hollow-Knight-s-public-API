import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryDark,
    alignItems: 'center',
  },
  backBtn: {
    position: 'absolute',
    left: SPACING.md,
    bottom: SPACING.md,
    padding: SPACING.xs,
  },
  backIcon: {
    color: COLORS.primary,
    fontSize: 22,
    fontFamily: FONTS.bodyBold,
  },
  textWrap: {
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.heading,
    fontSize: 20,
    color: COLORS.primary,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: FONTS.body,
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
    letterSpacing: 1,
  },
  ornament: {
    height: 2,
    width: 60,
    backgroundColor: COLORS.primaryDark,
    borderRadius: 1,
    marginTop: SPACING.xs,
  },
});