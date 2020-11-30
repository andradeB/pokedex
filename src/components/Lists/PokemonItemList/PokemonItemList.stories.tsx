import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { PokemonItemList } from './index';
import { View } from 'react-native';
import { H2Header } from 'components';

storiesOf('PokemonItemList', module).add('Components', () => {
  return (
    <View
      style={{
        marginHorizontal: 16,
      }}
    >
      <H2Header>Pokemon Item List</H2Header>
      <PokemonItemList
        id={1}
        name={'Bulbasaur'}
        types={['grass', 'poison']}
        image={'https://pokeres.bastionbot.org/images/pokemon/1.png'}
      />
    </View>
  );
});
