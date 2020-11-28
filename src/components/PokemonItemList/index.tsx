import React, { useContext, useMemo } from 'react';
import { PokemonType } from 'models';
import { FieldBold, H3Header } from '../Typography';
import {
  PokemonItemContainer,
  PokemonItemContentContainer,
  PokemonItemId,
  PokemonItemImage,
  PokemonItemName,
  PokemonItemTags,
} from './style';
import { Badge } from '../Badge';
import { ThemeContext } from 'styled-components';
import { View } from 'react-native';
import { TypeBackgroundColors } from 'theme';

type PokemonItemListProps = {
  id: number;
  types: Array<PokemonType | string>;
  name: string;
  image: string;
};

export const PokemonItemList: React.FC<PokemonItemListProps> = ({ id, types, name, image }) => {
  const theme = useContext(ThemeContext);
  const formatedId = useMemo<string>(() => `#${id.toString().padStart(3, 0)}`, [id]);
  return (
    <PokemonItemContainer background={TypeBackgroundColors.get(types[0])}>
      <PokemonItemContentContainer>
        <PokemonItemId>
          <FieldBold color={`${theme.color_text.black}96`}>{formatedId}</FieldBold>
        </PokemonItemId>
        <PokemonItemName>
          <H3Header color={theme.color_text.white}>{name}</H3Header>
        </PokemonItemName>
        <PokemonItemTags>
          {types.map((type) => (
            <View
              style={{
                marginRight: 5,
              }}
            >
              <Badge name={type} />
            </View>
          ))}
        </PokemonItemTags>
      </PokemonItemContentContainer>

      <PokemonItemImage source={{ uri: image }} />
    </PokemonItemContainer>
  );
};
