# BWB Digitals

A React Native application built with Expo, created from the init-template-project boilerplate.

## Features

- ⚡ **Expo SDK 52** - Latest Expo framework
- 📱 **React Native** - Cross-platform mobile development
- 🎨 **NativeWind** - Tailwind CSS for React Native
- 🧩 **Reusable Components** - Pre-built UI components
- 📝 **TypeScript** - Type safety and better DX
- 🎭 **Jest Testing** - Unit testing setup
- 📦 **pnpm** - Fast, disk space efficient package manager

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gabrielnvk/bwb-digitals.git
   cd bwb-digitals
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm start
   ```

4. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your device

## Project Structure

```
src/
├── components/ui/     # Reusable UI components
├── domains/           # Feature-specific code
├── shared/            # Shared utilities and types
│   ├── components/    # Shared components
│   ├── hooks/         # Custom hooks
│   ├── providers/     # Context providers
│   ├── types/         # TypeScript types
│   └── utils/         # Utility functions
app/                   # Expo Router pages
assets/                # Images, fonts, etc.
```

## Available Scripts

- `pnpm start` - Start Expo development server
- `pnpm android` - Run on Android
- `pnpm ios` - Run on iOS
- `pnpm web` - Run on web
- `pnpm test` - Run tests
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Development

This project uses:
- **Expo Router** for navigation
- **NativeWind** for styling
- **TypeScript** for type safety
- **Jest** for testing

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run tests and linting
4. Create a pull request

## License

This project is licensed under the MIT License.
