import * as React from 'react';
import { View } from 'react-native';
import { cn } from '@/lib/utils';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | 'full';
  padding?: boolean;
}

export function ResponsiveContainer({ 
  children, 
  className,
  maxWidth = '6xl',
  padding = true 
}: ResponsiveContainerProps) {
  const maxWidthClasses = {
    'sm': 'web:max-w-sm',
    'md': 'web:max-w-md',
    'lg': 'web:max-w-lg',
    'xl': 'web:max-w-xl',
    '2xl': 'web:max-w-2xl',
    '4xl': 'web:max-w-4xl',
    '6xl': 'web:max-w-6xl',
    'full': 'web:max-w-full',
  };

  return (
    <View 
      className={cn(
        'web:mx-auto web:w-full',
        maxWidthClasses[maxWidth],
        padding && 'px-4 web:px-6',
        className
      )}
    >
      {children}
    </View>
  );
}
