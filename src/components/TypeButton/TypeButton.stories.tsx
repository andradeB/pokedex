import React, { useContext } from 'react';
import { storiesOf } from '@storybook/react-native';
import { TypeButton } from './';
import {
  FlatList,
  ListRenderItem,
  ScrollView,
  SectionList,
  SectionListRenderItem,
  View,
} from 'react-native';
import { Body, H2Header, H3Header } from 'components';
import { PokemonType } from 'models';
import { TypeColors, WeightColors, HeightColors } from 'theme';

const Row = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      marginVertical: 8,
    }}
  >
    {children}
  </View>
);

const Column = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      marginRight: 8,
    }}
  >
    {children}
  </View>
);

storiesOf('TypeButton', module).add('TypeButton', () => {
  const pokemonTypes = Array.from(TypeColors.keys());
  const pokemonHeight = Array.from(HeightColors.keys());
  const pokemonWidth = Array.from(WeightColors.keys());

  console.log('pokemonWidth => ', pokemonWidth);

  const data = [
    {
      title: 'Type',
      data: pokemonTypes,
    },
    {
      title: 'Selected Type',
      active: true,
      data: pokemonTypes,
    },
    {
      title: 'Height',
      data: pokemonHeight,
    },
    {
      title: 'Selected Height',
      active: true,
      data: pokemonHeight,
    },
    {
      title: 'Width',
      data: pokemonWidth,
    },
    {
      title: 'Selected Width',
      active: true,
      data: pokemonWidth,
    },
  ];

  const RenderItem: ListRenderItem<{ title: string; active: boolean; data: string[] }> = ({
    item,
  }) => (
    <FlatList
      data={item.data}
      style={{
        marginVertical: 16,
      }}
      ListHeaderComponent={
        <View
          style={{
            marginVertical: 8,
          }}
        >
          <Body>{item.title}</Body>
        </View>
      }
      numColumns={4}
      keyExtractor={(item, index) => {
        return `${item}-${item}-${index}`;
      }}
      renderItem={({ item: itemData }) => (
        <View
          style={{
            margin: 16,
          }}
        >
          <TypeButton active={item.active} name={itemData as PokemonType} />
        </View>
      )}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={RenderItem}
      keyExtractor={(item, index) => {
        return `${item.title}-${index}`;
      }}
    />
  );
});
