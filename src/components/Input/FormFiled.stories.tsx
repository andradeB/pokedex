import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Input } from './';
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

const Collumn = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      flex: 1,
      marginHorizontal: 8,
    }}
  >
    {children}
  </View>
);

storiesOf('FormField', module).add('Components', () => (
  <View
    style={{
      marginHorizontal: 16,
    }}
  >
    <Row>
      <H2Header>Inputs</H2Header>
    </Row>
    <Row>
      <H3Header>Default</H3Header>
    </Row>
    <Row>
      <Input value={'Input Default'} />
    </Row>
    <Row>
      <H3Header>Active</H3Header>
    </Row>
    <Row>
      <Input active value={'Input Active'} />
    </Row>
  </View>
));
