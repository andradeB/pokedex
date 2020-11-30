module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          components: './src/components',
          config: './src/config',
          navigators: './src/navigators',
          screens: './src/screens',
          services: './src/services',
          store: './src/store',
          models: './src/models',
          theme: './src/theme',
          I18N: './src/I18N',
        },
      },
    ],
  ],
};
