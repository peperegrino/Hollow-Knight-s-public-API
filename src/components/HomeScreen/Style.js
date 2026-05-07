import { StyleSheet } from 'react-native';
import { COLORS, FONTS, RADIUS, SPACING } from '../../styles/theme';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  tabs: {
    flexDirection: 'row',
    marginHorizontal: SPACING.md,
    marginTop: SPACING.md,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.full,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.full,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    fontFamily: FONTS.bodyBold,
    fontSize: 13,
    color: COLORS.textMuted,
    letterSpacing: 0.5,
  },
  tabTextActive: {
    color: COLORS.black,
  },
  list: {
    paddingBottom: SPACING.xl,
  },
});