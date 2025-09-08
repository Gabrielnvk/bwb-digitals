const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        success: {
          10: 'var(--success-10)',
          20: 'var(--success-20)',
          30: 'var(--success-30)',
          40: 'var(--success-40)',
          50: 'var(--success-50)',
          60: 'var(--success-60)',
          70: 'var(--success-70)',
          80: 'var(--success-80)',
          90: 'var(--success-90)',
          100: 'var(--success-100)',
        },
        error: {
          10: 'var(--error-10)',
          20: 'var(--error-20)',
          30: 'var(--error-30)',
          40: 'var(--error-40)',
          50: 'var(--error-50)',
          60: 'var(--error-60)',
          70: 'var(--error-70)',
          80: 'var(--error-80)',
          90: 'var(--error-90)',
          100: 'var(--error-100)',
        },
        warning: {
          10: 'var(--warning-10)',
          20: 'var(--warning-20)',
          30: 'var(--warning-30)',
          40: 'var(--warning-40)',
          50: 'var(--warning-50)',
          60: 'var(--warning-60)',
          70: 'var(--warning-70)',
          80: 'var(--warning-80)',
          90: 'var(--warning-90)',
          100: 'var(--warning-100)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('tailwindcss-animate')],
};
