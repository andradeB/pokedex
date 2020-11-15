import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ButtonContainer = styled(RectButton)<{ active: boolean }>`
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.border_radius}px;
  background: ${({ theme, active }) =>
    active
      ? theme.default_background.defaultBgActiveButton
      : theme.default_background.defaultBgInput};
`;
