import React, { useMemo, useState } from 'react';
import { RootNavigation } from './src/navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Storybook from './storybook';
import { ThemeProvider } from 'styled-components/native';
import { ThemeBase } from './src/Theme';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default function () {
  const [showStorybook, setStorybookVisibility] = useState<boolean>(true);
  const Content = useMemo(() => (showStorybook ? Storybook : App), [showStorybook]);
  const theme = new ThemeBase();

  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}
