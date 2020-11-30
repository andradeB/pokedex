import React, { useContext, useMemo } from 'react';
import { PokemonType } from 'models';
import { FieldBold, H3Header } from '../../Typography';
import {
  PokemonItemContainer,
  PokemonItemContentContainer,
  PokemonItemId,
  PokemonItemImage,
  PokemonItemName,
  PokemonItemTags,
} from './style';
import { Badge } from '../../Badge';
import { ThemeContext } from 'styled-components';
import { View } from 'react-native';
import { TypeBackgroundColors } from 'theme';
import { Pokemon } from 'models';

type PokemonItemListProps = {
  item: Pokemon;
};

export const PokemonItemList: React.FC<PokemonItemListProps> = ({ item }) => {
  const theme = useContext(ThemeContext);
  const { id, name, types } = item;

  const formatedId = useMemo<string>(() => `#${id.toString().padStart(3, '0')}`, [id]);
  const formatedName = useMemo<string>(() => name.charAt(0).toUpperCase() + name.slice(1), [name]);

  return (
    <PokemonItemContainer background={TypeBackgroundColors.get(types[0])}>
      <PokemonItemContentContainer>
        <PokemonItemId>
          <FieldBold color={`${theme.color_text.black}96`}>{formatedId}</FieldBold>
        </PokemonItemId>
        <PokemonItemName>
          <H3Header color={theme.color_text.white}>{formatedName}</H3Header>
        </PokemonItemName>
        <PokemonItemTags>
          {types.map((type) => (
            <View
              key={`pokemon-item-type-${type}`}
              style={{
                marginRight: 5,
              }}
            >
              <Badge name={type} />
            </View>
          ))}
        </PokemonItemTags>
      </PokemonItemContentContainer>
      <PokemonItemImage
        source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png` }}
      />
    </PokemonItemContainer>
  );
};
