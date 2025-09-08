import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { TextInput, View } from 'react-native';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input',
        secondary: 'border-secondary bg-secondary',
        ghost: 'border-transparent',
        outline: 'border-border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput>,
    VariantProps<typeof inputVariants> {
  containerClassName?: string;
}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, variant, containerClassName, ...props }, ref) => {
    return (
      <View className={cn('relative', containerClassName)}>
        <TextInput className={cn(inputVariants({ variant }), className)} ref={ref} {...props} />
      </View>
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants };





