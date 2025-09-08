import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Switch as RNSwitch, View } from 'react-native';

import { cn } from '@/lib/utils';

const switchVariants = cva(
  'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
  {
    variants: {
      variant: {
        default: '',
        secondary: 'data-[state=checked]:bg-secondary',
        destructive: 'data-[state=checked]:bg-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const switchThumbVariants = cva(
  'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof RNSwitch>,
    VariantProps<typeof switchVariants> {
  containerClassName?: string;
}

const Switch = React.forwardRef<React.ElementRef<typeof RNSwitch>, SwitchProps>(
  ({ className, variant, containerClassName, ...props }, ref) => (
    <View className={cn('relative', containerClassName)}>
      <RNSwitch className={cn(switchVariants({ variant }), className)} ref={ref} {...props} />
      <View className={cn(switchThumbVariants())} />
    </View>
  )
);
Switch.displayName = 'Switch';

export { Switch, switchThumbVariants, switchVariants };





