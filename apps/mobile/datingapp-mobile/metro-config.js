import path from 'path';
import { getDefaultConfig } from 'expo/metro-config';

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

config.watchFolders = [
  path.resolve(projectRoot, 'packages/shared'),
];

config.resolver.alias = {
  shared: path.resolve(projectRoot, 'packages/shared'),
};

export default config;
