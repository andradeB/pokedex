import styled from 'styled-components/native';

export const BadgeContainer = styled.View<{ background?: string }>`
  height: 25px;
  flex-direction: row;
  padding-horizontal: 8px;
  align-items: center;
  border-radius: 3px;
  background: ${({ theme, background }) =>
    background || theme.default_background.defaultBgPressedInput};
`;
