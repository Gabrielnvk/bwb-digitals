import * as React from 'react';
import { Platform } from 'react-native';
import { Button, ButtonProps } from '@/src/components/ui/button';
import { cn } from '@/lib/utils';

interface ResponsiveButtonProps extends ButtonProps {
  webSize?: 'default' | 'sm' | 'lg' | 'xl';
}

export function ResponsiveButton({ 
  className, 
  webSize = 'default',
  size = 'default',
  ...props 
}: ResponsiveButtonProps) {
  const webSizeClasses = {
    'default': 'web:px-4 web:py-2',
    'sm': 'web:px-3 web:py-1.5 web:text-sm',
    'lg': 'web:px-6 web:py-3 web:text-base',
    'xl': 'web:px-8 web:py-4 web:text-lg',
  };

  return (
    <Button 
      className={cn(
        Platform.OS === 'web' && webSizeClasses[webSize],
        'web:transition-all web:duration-200',
        className
      )}
      size={size}
      {...props}
    />
  );
}
