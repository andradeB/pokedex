import React from 'react';
import { RootNavigation } from './src/navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default App;
