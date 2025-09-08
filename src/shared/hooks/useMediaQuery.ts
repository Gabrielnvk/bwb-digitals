import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Only run on web platform
    if (Platform.OS !== 'web') {
      return;
    }

    // Check if window is defined (for SSR)
    if (typeof window === 'undefined') {
      return;
    }

    // Create media query list
    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);

    // Define event handler
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add event listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

// Predefined breakpoint hooks
export function useIsSmallScreen() {
  return useMediaQuery('(max-width: 640px)');
}

export function useIsMediumScreen() {
  return useMediaQuery('(min-width: 641px) and (max-width: 768px)');
}

export function useIsLargeScreen() {
  return useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
}

export function useIsDesktop() {
  return useMediaQuery('(min-width: 1025px)');
}

export function useIsMobile() {
  return useMediaQuery('(max-width: 768px)');
}
