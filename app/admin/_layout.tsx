import { Stack } from 'expo-router';
import { THEME } from '@/lib/theme';
import { useColorScheme } from 'nativewind';

export default function AdminLayout() {
  const { colorScheme } = useColorScheme();
  
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? THEME.dark.background : THEME.light.primary,
        },
        headerTintColor: colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.primaryForeground,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
}
