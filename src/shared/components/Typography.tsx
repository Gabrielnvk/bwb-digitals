import React from 'react';
import { Text } from '@/src/components/ui/text';
import { cn } from '@/lib/utils';
import type { TextProps } from 'react-native';

interface TypographyProps extends Omit<TextProps, 'children'> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'error' | 'success' | 'warning';
}

// Heading Components
export const H1 = ({ children, className, ...props }: TypographyProps) => (
  <Text variant="h1" className={cn('text-foreground', className)} {...props}>
    {children}
  </Text>
);

export const H2 = ({ children, className, ...props }: TypographyProps) => (
  <Text variant="h2" className={cn('text-foreground', className)} {...props}>
    {children}
  </Text>
);

export const H3 = ({ children, className, ...props }: TypographyProps) => (
  <Text variant="h3" className={cn('text-foreground', className)} {...props}>
    {children}
  </Text>
);

export const H4 = ({ children, className, ...props }: TypographyProps) => (
  <Text variant="h4" className={cn('text-foreground', className)} {...props}>
    {children}
  </Text>
);

// Body Text Components
export const Body = ({ children, className, variant = 'primary', ...props }: TypographyProps) => {
  const variantClasses = {
    primary: 'text-foreground',
    secondary: 'text-muted-foreground',
    accent: 'text-accent',
    error: 'text-destructive',
    success: 'text-green-600',
    warning: 'text-yellow-600'
  };

  return (
    <Text className={cn('text-base leading-relaxed', variantClasses[variant], className)} {...props}>
      {children}
    </Text>
  );
};

export const Small = ({ children, className, variant = 'secondary', ...props }: TypographyProps) => {
  const variantClasses = {
    primary: 'text-foreground',
    secondary: 'text-muted-foreground',
    accent: 'text-accent',
    error: 'text-destructive',
    success: 'text-green-600',
    warning: 'text-yellow-600'
  };

  return (
    <Text variant="small" className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Text>
  );
};

export const Caption = ({ children, className, ...props }: TypographyProps) => (
  <Text variant="muted" className={cn('text-xs', className)} {...props}>
    {children}
  </Text>
);

// Form Components
export const Label = ({ children, className, ...props }: TypographyProps) => (
  <Text className={cn('text-sm font-semibold text-foreground mb-1', className)} {...props}>
    {children}
  </Text>
);

export const Helper = ({ children, className, ...props }: TypographyProps) => (
  <Text variant="muted" className={cn('text-xs mt-1', className)} {...props}>
    {children}
  </Text>
);

export const Error = ({ children, className, ...props }: TypographyProps) => (
  <Text className={cn('text-xs text-destructive mt-1', className)} {...props}>
    {children}
  </Text>
);

export const Success = ({ children, className, ...props }: TypographyProps) => (
  <Text className={cn('text-xs text-green-600 mt-1', className)} {...props}>
    {children}
  </Text>
);

// Special Components for BWB
export const Price = ({ children, className, ...props }: TypographyProps) => (
  <Text className={cn('text-2xl font-bold text-accent', className)} {...props}>
    {children}
  </Text>
);

export const Badge = ({ children, className, ...props }: TypographyProps) => (
  <Text className={cn('text-xs font-semibold uppercase tracking-wider text-accent', className)} {...props}>
    {children}
  </Text>
);

// Export all components as a namespace
export const Typography = {
  H1,
  H2,
  H3,
  H4,
  Body,
  Small,
  Caption,
  Label,
  Helper,
  Error,
  Success,
  Price,
  Badge
};
