import styled from 'styled-components/native';
import { TypeColors } from 'theme';

export const IconItemListContainer = styled.View<{ name: string }>`
  height: 64px;
  flex-direction: row;
  align-items: center;
  border-radius: 32px;
  margin-vertical: 8px;
  padding-horizontal: 8px;
  background: ${({ theme, name }) =>
    TypeColors.get(name) || theme.default_background.defaultBgPressedInput};
`;

export const IconCircle = styled.View`
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: white;
`;
