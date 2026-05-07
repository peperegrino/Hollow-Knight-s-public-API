import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { COLORS, FONTS } from '../../src/styles/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary || '#E1B305',
        tabBarInactiveTintColor: COLORS.textMuted || '#888',
        tabBarStyle: {
          backgroundColor: COLORS.surface || '#1A1A1A',
          borderTopWidth: 1,
          borderTopColor: COLORS.border || '#333',
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.body || 'System',
          fontSize: 11,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hallownest',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 24 }}>⚔</Text>,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 24 }}>⚲</Text>,
        }}
      />
    </Tabs>
  );
}