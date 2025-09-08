import '@testing-library/jest-native/extend-expect';

// Silence React Native and Expo noisy logs during tests
jest.spyOn(console, 'warn').mockImplementation(() => {});
jest.spyOn(console, 'error').mockImplementation(() => {});
