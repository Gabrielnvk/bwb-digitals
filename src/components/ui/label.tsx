import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { View } from 'react-native';

import { cn } from '@/lib/utils';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof View>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<React.ElementRef<typeof View>, LabelProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn(labelVariants(), className)} {...props} />
  )
);
Label.displayName = 'Label';

export { Label, labelVariants };





