import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Body,
  Button,
  Container,
  H2Header,
  Input,
  PokemonItemList,
  ScreenContainer,
  SheetsContext,
  TopBarActionTypes,
} from 'components';
import { TopBar, SortSheet } from 'components';
import { FlatList, ListRenderItem } from 'react-native';
import { PokemonService } from 'services';
import { Pokemon } from 'models';
import { translate } from 'I18N';

const HeaderHomeScreen: React.FC = () => {
  const [search, setSearch] = useState<string>();
  return (
    <Container mb={4}>
      <Container mt={3}>
        <H2Header>Pokédex</H2Header>
      </Container>
      <Container mt={3}>
        <Body>{translate('SEARCH_MESSAGE')}</Body>
      </Container>
      <Container mt={4}>
        <Input value={search} onChangeText={setSearch} />
      </Container>
    </Container>
  );
};

export const HomeScreen: React.FC = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const modalContext = useContext(SheetsContext);

  const topBarActions = new Map<TopBarActionTypes, () => void>([
    ['filter', () => modalContext?.filterVisible(true)],
    // ['generation', () => setGenerationVisibility(true)],
    // ['sort', () => setSortVisibility(true)],
  ]);

  const fetchData = async () => {
    try {
      const pokemons = await PokemonService.Find();
      setData(pokemons);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem: ListRenderItem<Pokemon> = ({ item }) => {
    return (
      <Container my={3}>
        <PokemonItemList item={item} />
      </Container>
    );
  };

  const onTopbarAction = (type: TopBarActionTypes) => {
    const action = topBarActions.get(type);
    if (action) {
      action();
    }
  };

  return (
    <ScreenContainer>
      <Container mx={4}>
        <Container mt={3}>
          <TopBar onAction={onTopbarAction} />
        </Container>
        <FlatList
          keyExtractor={(item) => `pokemon-list-${item.id}`}
          data={data}
          renderItem={renderItem}
          ListHeaderComponent={HeaderHomeScreen}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </ScreenContainer>
  );
};
