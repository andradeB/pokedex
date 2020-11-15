import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Button } from './';
import { View } from 'react-native';
import { H2Header, H3Header } from 'components';
const Row = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      marginVertical: 8,
    }}
  >
    {children}
  </View>
);

storiesOf('Button', module).add('Components', () => (
  <View
    style={{
      marginHorizontal: 16,
    }}
  >
    <Row>
      <H2Header>Buttons Types</H2Header>
    </Row>
    <Row>
      <H3Header>Active Button</H3Header>
    </Row>
    <Row>
      <Button active label="Primary / Active" />
    </Row>
    <Row>
      <H3Header>Default Button</H3Header>
    </Row>
    <Row>
      <Button label="Default / Unselected" />
    </Row>
  </View>
));
