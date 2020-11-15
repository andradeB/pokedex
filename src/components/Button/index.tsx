import React, { useContext } from 'react';
import { Body } from '../Typography';
import { ButtonContainer } from './style';
import { ThemeContext } from 'styled-components';

type ButtonProps = {
  label: string;
  active?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ label, active = false }) => {
  const theme = useContext(ThemeContext);
  return (
    <ButtonContainer onPress={() => {}} active={active}>
      <Body color={active ? theme.color_text.white : theme.color_text.grey}>{label}</Body>
    </ButtonContainer>
  );
};
