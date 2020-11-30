import styled from 'styled-components/native';

export const InnerInput = styled.TextInput<{ active?: boolean }>`
  font-family: 'SF Pro Display';
  font-size: 16px;
  color: ${({ theme }) => theme.color_text.grey2}
  flex: 1;
`;

export const InputContainer = styled.View<{ active?: boolean }>`
  height: 60px;
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }) => theme.border_radius}px;
  background: ${({ theme, active }) =>
    active
      ? theme.default_background.defaultBgPressedInput
      : theme.default_background.defaultBgInput};
`;
