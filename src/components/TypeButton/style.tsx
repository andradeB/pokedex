import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const TypeButtonContainer = styled(RectButton)<{ background?: string }>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background: ${({ background, theme }) =>
    background || theme.default_background.defaultBgPressedInput};
`;
