import path from 'path';
import { getDefaultConfig } from 'expo/metro-config';

console.log('🧩 Custom Metro config loaded from', __dirname);

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../../..');

console.log('🧩 Project root:', projectRoot);
console.log('🧩 Monorepo root:', monorepoRoot);
console.log('🧩 Shared path:', path.resolve(monorepoRoot, 'packages/shared'));

const config = getDefaultConfig(projectRoot);

config.watchFolders = [
  path.resolve(monorepoRoot, 'packages/shared'),
];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

config.resolver.alias = {
  shared: path.resolve(monorepoRoot, 'packages/shared'),
};

console.log('🧩 Alias mapping:', config.resolver.alias);

export default config;
