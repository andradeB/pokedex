import React, { useContext, useRef, useState } from 'react';
import { InnerInput, InputContainer } from './style';
import { TextInput, TextInputProps, TouchableWithoutFeedback } from 'react-native';
import { Icon } from '../Icon';
import { ThemeContext } from 'styled-components';
import { translate } from 'I18N';
import { Container } from '../Container';

export const Input: React.FC<TextInputProps> = (props) => {
  const [active, setActive] = useState(false);
  const inputRef = useRef<TextInput>();

  const theme = useContext(ThemeContext);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        inputRef?.current?.focus();
      }}
    >
      <InputContainer active={active}>
        <Container mx={3}>
          <Icon name={'search'} size={16} color={theme.color_text.grey} />
        </Container>
        <InnerInput
          {...props}
          ref={inputRef}
          onFocus={() => {
            setActive(true);
          }}
          onBlur={() => {
            setActive(false);
          }}
          placeholderTextColor={theme.color_text.grey}
          placeholder={translate('INPUT_SEARCH_PLACEHOLDER')}
        />
      </InputContainer>
    </TouchableWithoutFeedback>
  );
};
