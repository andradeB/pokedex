import styled from 'styled-components/native';

export const Input = styled.TextInput<{ active?: boolean }>`
  height: 60px;
  font-family: 'SF Pro Display';
  padding: 24px;
  border-radius: ${({ theme }) => theme.border_radius}px;
  background: ${({ theme, active }) =>
    active
      ? theme.default_background.defaultBgPressedInput
      : theme.default_background.defaultBgInput};
`;
