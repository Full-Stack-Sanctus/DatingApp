import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./'],
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            shared: '../../../packages/shared',
          },
        },
      ],
    ],
  };
}
