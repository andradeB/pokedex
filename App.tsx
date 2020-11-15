import React, { useMemo, useState } from 'react';
import { RootNavigation } from './src/navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Storybook from './storybook';
import { ThemeProvider } from 'styled-components/native';
import { ThemeBase } from './src/theme';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default function () {
  if (!__DEV__) {
    return (
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  }

  const [showStorybook, setStorybookVisibility] = useState<boolean>(true);
  const Content = useMemo(() => (showStorybook ? Storybook : App), [showStorybook]);
  const theme = new ThemeBase();

  if (__DEV__) {
    const DevMenu = require('react-native-dev-menu');
    DevMenu.addItem(
      `Turn ${!showStorybook ? 'app' : 'storybook'} into ${showStorybook ? 'app' : 'storybook'}`,
      () => setStorybookVisibility(!showStorybook),
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}
