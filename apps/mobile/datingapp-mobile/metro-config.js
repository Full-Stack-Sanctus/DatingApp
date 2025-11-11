const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(__dirname, '../../../');

const config = getDefaultConfig(projectRoot);

// 👀 Watch shared package for changes
config.watchFolders = [path.resolve(monorepoRoot, 'packages/shared')];

// 🔍 Ensure Metro resolves "shared" properly
config.resolver.nodeModulesPaths = [
  path.resolve(monorepoRoot, 'node_modules'),
  path.resolve(projectRoot, 'node_modules'),
];

// 🧩 Add extensions to ensure .tsx files compile correctly
config.resolver.sourceExts = [...config.resolver.sourceExts, 'cjs', 'ts', 'tsx'];

module.exports = config;
