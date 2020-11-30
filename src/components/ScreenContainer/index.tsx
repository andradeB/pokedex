import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ScreenContainer: React.FC = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingTop: insets.top,
      }}
    >
      {children}
    </View>
  );
};
