import styled from 'styled-components/native';

export const InnerInput = styled.TextInput<{ active?: boolean }>`
  font-family: 'SF Pro Display';
`;

export const InputContainer = styled.TextInput<{ active?: boolean }>`
  height: 60px;
  flex-direction: row;
  font-family: 'SF Pro Display';
  padding-horizontal: 24px;
  border-radius: ${({ theme }) => theme.border_radius}px;
  background: ${({ theme, active }) =>
    active
      ? theme.default_background.defaultBgPressedInput
      : theme.default_background.defaultBgInput};
`;
