import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const TopBarContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const TopBarButton = styled(RectButton)`
  padding: 10px;
  margin-left: 8px;
  border-radius: 30px;
`;
