// apps/mobile/datingapp-mobile/metro.config.js
import { getDefaultConfig } from 'expo/metro-config';

const config = getDefaultConfig(__dirname);

// Optional: helpful log for CI
console.warn('🚀 Using Expo automatic Metro config for monorepos (SDK52+)');

export default config;
