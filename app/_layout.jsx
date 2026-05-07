import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Rota principal com abas */}
        <Stack.Screen name="(tabs)" />
        
        {/* Rota de Detalhes (quando clica num card) */}
        <Stack.Screen 
          name="details" 
          options={{ 
            presentation: 'card',
            animation: 'slide_from_right' 
          }} 
        />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}