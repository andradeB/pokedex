import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { PokemonItemList } from './';
import { FlatList, ListRenderItem, View } from 'react-native';
import { H2Header } from 'components';
import { TypeColors } from 'theme';

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

storiesOf('PokemonItemList', module).add('Components', () => {
  const data = Array.from(TypeColors.keys());
  const renderItem: ListRenderItem<string> = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        marginRight: 8,
        marginTop: 8,
      }}
    >
      <Badge name={item} />
    </View>
  );

  return (
    <View
      style={{
        marginHorizontal: 16,
      }}
    >
      <H2Header>Badges</H2Header>
      <PokemonItemList
        id={1}
        name={'Bulbasaur'}
        types={['grass', 'poison']}
        image={'https://pokeres.bastionbot.org/images/pokemon/1.png'}
      />
    </View>
  );
});
