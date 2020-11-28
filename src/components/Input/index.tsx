import React, { useState } from 'react';
import { InnerInput, InputContainer } from './style';
import { TextInputProps } from 'react-native';

export const Input: React.FC<TextInputProps> = (props) => {
  const [active, setActive] = useState(false);
  return (
    <InputContainer active={active}>
      <InnerInput onBlur={() => setActive(true)} onFocus={() => setActive(false)} />
    </InputContainer>
  );
};
