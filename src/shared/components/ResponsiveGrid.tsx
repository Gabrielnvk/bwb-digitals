import * as React from 'react';
import { View } from 'react-native';
import { cn } from '@/lib/utils';

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
}

export function ResponsiveGrid({ 
  children, 
  className,
  columns = { default: 1, md: 2, lg: 3 },
  gap = 4
}: ResponsiveGridProps) {
  const getGridCols = () => {
    const classes: string[] = [];
    
    // Using static classes that Tailwind can detect at build time
    const colMap: Record<number, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
    };
    
    const webColMap: Record<string, Record<number, string>> = {
      sm: {
        1: 'web:sm:grid-cols-1',
        2: 'web:sm:grid-cols-2',
        3: 'web:sm:grid-cols-3',
        4: 'web:sm:grid-cols-4',
      },
      md: {
        1: 'web:md:grid-cols-1',
        2: 'web:md:grid-cols-2',
        3: 'web:md:grid-cols-3',
        4: 'web:md:grid-cols-4',
      },
      lg: {
        1: 'web:lg:grid-cols-1',
        2: 'web:lg:grid-cols-2',
        3: 'web:lg:grid-cols-3',
        4: 'web:lg:grid-cols-4',
      },
      xl: {
        1: 'web:xl:grid-cols-1',
        2: 'web:xl:grid-cols-2',
        3: 'web:xl:grid-cols-3',
        4: 'web:xl:grid-cols-4',
      },
    };
    
    if (columns.default && colMap[columns.default]) {
      classes.push(colMap[columns.default]);
    }
    if (columns.sm && webColMap.sm[columns.sm]) {
      classes.push(webColMap.sm[columns.sm]);
    }
    if (columns.md && webColMap.md[columns.md]) {
      classes.push(webColMap.md[columns.md]);
    }
    if (columns.lg && webColMap.lg[columns.lg]) {
      classes.push(webColMap.lg[columns.lg]);
    }
    if (columns.xl && webColMap.xl[columns.xl]) {
      classes.push(webColMap.xl[columns.xl]);
    }
    
    return classes.join(' ');
  };
  
  // Static gap classes
  const gapMap: Record<number, string> = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    8: 'gap-8',
  };

  return (
    <View 
      className={cn(
        'web:grid flex-col',
        getGridCols(),
        gapMap[gap] || 'gap-4',
        className
      )}
    >
      {children}
    </View>
  );
}
