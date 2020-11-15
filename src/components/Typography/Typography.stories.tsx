import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Body, BodyBold, Field, FieldBold, H1Header, H2Header, H3Header } from './';
import { View } from 'react-native';

const Row = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      marginVertical: 8,
    }}
  >
    {children}
  </View>
);

storiesOf('Typography', module).add('Components', () => (
  <View
    style={{
      marginHorizontal: 16,
    }}
  >
    <Row>
      <H2Header>Typography</H2Header>
    </Row>
    <Row>
      <Body>
        We use SF Pro Display as a primary typeface. The hierarchy is divided into three parts: font
        name, font size and weight.
      </Body>
    </Row>
    <Row>
      <H1Header>Title</H1Header>
    </Row>
    <Row>
      <H2Header>H2Header</H2Header>
    </Row>
    <Row>
      <H3Header>H3Header</H3Header>
    </Row>
    <Row>
      <Body>Body</Body>
    </Row>
    <Row>
      <BodyBold>BodyBold</BodyBold>
    </Row>
    <Row>
      <Field>Field</Field>
    </Row>
    <Row>
      <FieldBold>FieldBold</FieldBold>
    </Row>
  </View>
));
