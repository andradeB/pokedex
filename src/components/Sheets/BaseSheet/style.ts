import styled from 'styled-components/native';
import { Dimensions, Pressable } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const BaseSheetBackground = styled(Pressable)`
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  width: ${width}px;
  height: ${height}px;
  z-index: 1;
`;

export const BaseSheetContent = styled.View`
  position: absolute;
  background: white;
  width: ${width}px;
  height: ${height}px;
  flex: 1;
  z-index: 2;
  border-radius: ${({ theme }) => theme.border_radius * 3}px;
`;
