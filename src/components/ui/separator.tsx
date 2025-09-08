import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { View } from 'react-native';

import { cn } from '@/lib/utils';

const separatorVariants = cva('shrink-0 bg-border', {
  variants: {
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof View>,
    VariantProps<typeof separatorVariants> {
  decorative?: boolean;
}

const Separator = React.forwardRef<React.ElementRef<typeof View>, SeparatorProps>(
  ({ className, orientation, decorative = true, ...props }, ref) => (
    <View
      ref={ref}
      role={decorative ? 'none' : 'separator'}
      aria-orientation={orientation}
      className={cn(separatorVariants({ orientation }), className)}
      {...props}
    />
  )
);
Separator.displayName = 'Separator';

export { Separator, separatorVariants };





