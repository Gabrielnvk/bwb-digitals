import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native';

export const THEME = {
  light: {
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(218 49% 20%)', // BWB Navy
    card: 'hsl(0 0% 100%)',
    cardForeground: 'hsl(218 49% 20%)',
    popover: 'hsl(0 0% 100%)',
    popoverForeground: 'hsl(218 49% 20%)',
    primary: 'hsl(218 49% 20%)', // BWB Navy
    primaryForeground: 'hsl(0 0% 100%)',
    secondary: 'hsl(0 0% 96%)', // Light gray
    secondaryForeground: 'hsl(218 49% 20%)',
    muted: 'hsl(0 0% 96%)',
    mutedForeground: 'hsl(218 49% 35%)',
    accent: 'hsl(30 47% 61%)', // BWB Gold
    accentForeground: 'hsl(218 49% 20%)',
    destructive: '#F04438',
    border: 'hsl(0 0% 89.8%)',
    input: 'hsl(0 0% 89.8%)',
    ring: 'hsl(30 47% 61%)', // BWB Gold
    radius: '0.5rem',
    chart1: 'hsl(30 47% 61%)',
    chart2: 'hsl(218 49% 30%)',
    chart3: 'hsl(218 49% 20%)',
    chart4: 'hsl(30 47% 71%)',
    chart5: 'hsl(30 47% 51%)',
  },
  dark: {
    background: 'hsl(218 49% 12%)', // Dark BWB Navy
    foreground: 'hsl(0 0% 100%)', // White
    card: 'hsl(218 49% 15%)',
    cardForeground: 'hsl(0 0% 100%)',
    popover: 'hsl(218 49% 15%)',
    popoverForeground: 'hsl(0 0% 100%)',
    primary: 'hsl(30 47% 61%)', // BWB Gold in dark mode
    primaryForeground: 'hsl(218 49% 20%)',
    secondary: 'hsl(218 49% 25%)',
    secondaryForeground: 'hsl(0 0% 100%)',
    muted: 'hsl(218 49% 25%)',
    mutedForeground: 'hsl(0 0% 75%)',
    accent: 'hsl(30 47% 61%)', // BWB Gold
    accentForeground: 'hsl(218 49% 20%)',
    destructive: 'hsl(0 70.9% 59.4%)',
    border: 'hsl(218 49% 25%)',
    input: 'hsl(218 49% 25%)',
    ring: 'hsl(30 47% 61%)', // BWB Gold
    radius: '0.5rem',
    chart1: 'hsl(30 47% 61%)',
    chart2: 'hsl(30 47% 71%)',
    chart3: 'hsl(218 49% 40%)',
    chart4: 'hsl(30 47% 51%)',
    chart5: 'hsl(218 49% 50%)',
  },
};

export const NAV_THEME: Record<'light' | 'dark', Theme> = {
  light: {
    ...DefaultTheme,
    colors: {
      background: THEME.light.background,
      border: THEME.light.border,
      card: THEME.light.card,
      notification: THEME.light.destructive,
      primary: THEME.light.primary,
      text: THEME.light.foreground,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      background: THEME.dark.background,
      border: THEME.dark.border,
      card: THEME.dark.card,
      notification: THEME.dark.destructive,
      primary: THEME.dark.primary,
      text: THEME.dark.foreground,
    },
  },
};
