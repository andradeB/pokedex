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
          store: './src/store',
          models: './src/models',
        },
      },
    ],
  ],
};
