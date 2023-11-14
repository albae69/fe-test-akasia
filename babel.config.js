module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@services': './src/services',
          '@store': './src/store',
          '@navigation': './src/navigation',
          '@model': './src/model',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
