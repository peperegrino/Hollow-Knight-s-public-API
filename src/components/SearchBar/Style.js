import { StyleSheet } from 'react-native';
import { COLORS, FONTS, RADIUS, SPACING } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: SPACING.md,
    marginHorizontal: SPACING.md,
    marginVertical: SPACING.sm,
    height: 44,
  },
  icon: {
    fontSize: 18,
    color: COLORS.textMuted,
    marginRight: SPACING.sm,
  },
  input: {
    flex: 1,
    fontFamily: FONTS.body,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  clear: {
    fontSize: 14,
    color: COLORS.textMuted,
    paddingLeft: SPACING.sm,
  },
});