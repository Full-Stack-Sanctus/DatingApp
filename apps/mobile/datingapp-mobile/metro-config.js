import path from 'path';
import { getDefaultConfig } from 'expo/metro-config';

console.log('🧩 Custom Metro config loaded from', __dirname);

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../../..');
const sharedPath = path.resolve(monorepoRoot, 'packages/shared');

console.log('🧩 Project root:', projectRoot);
console.log('🧩 Monorepo root:', monorepoRoot);
console.log('🧩 Shared path:', sharedPath);

const config = getDefaultConfig(projectRoot);

// ✅ Allow watching files outside the app directory
config.watchFolders = [sharedPath];

// ✅ Add shared node_modules for dependency resolution
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// ✅ Add alias for easier imports
config.resolver.alias = {
  shared: sharedPath,
};

// ✅ Include .ts and .tsx from shared
config.resolver.sourceExts = [
  'js', 'jsx', 'ts', 'tsx', 'json', 'cjs', 'mjs'
];

// ✅ Ensure Metro handles symbolic links (important for monorepos)
config.resolver.symlinks = true;

console.log('🧩 Alias mapping:', config.resolver.alias);

export default config;
