import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const PokemonItemContainer = styled(RectButton)<{ background?: string }>`
  height: 115px;
  flex-direction: row;
  padding: 20px;
  border-radius: ${({ theme }) => theme.border_radius};
  background: ${({ theme, background }) =>
    background || theme.default_background.defaultBgPressedInput};
`;
export const PokemonItemContentContainer = styled.View``;
export const PokemonItemId = styled.View``;
export const PokemonItemName = styled.View``;
export const PokemonItemTags = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;
export const PokemonItemImage = styled.Image`
  flex: 1;
  position: absolute;
  height: 130px;
  width: 130px;
  right: 10px;
  bottom: 10px;
`;
