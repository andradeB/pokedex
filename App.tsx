import React, { useMemo, useState } from 'react';
import { RootNavigation } from './src/navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Storybook from './storybook';
import { ThemeProvider } from 'styled-components/native';
import { ThemeBase } from './src/theme';
import { NativeModules, Platform } from 'react-native';
import { setLanguage } from 'I18N';
import { SheetsProvider } from 'components';

declare const global: { HermesInternal: null | {} };

const getLanguageByDevice = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale // Adquire o idioma no device iOS
    : NativeModules.I18nManager.localeIdentifier; // Adquire o idioma no device Android
};

setLanguage(getLanguageByDevice());

if (__DEV__) {
  import('./config/ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default function () {
  const theme = new ThemeBase();

  if (__DEV__) {
    return (
      <ThemeProvider theme={theme}>
        <SheetsProvider>
          <App />
        </SheetsProvider>
      </ThemeProvider>
    );
  }

  const [showStorybook, setStorybookVisibility] = useState<boolean>(true);
  const Content = useMemo(() => (showStorybook ? Storybook : App), [showStorybook]);

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
