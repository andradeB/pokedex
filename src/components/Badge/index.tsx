import React, { useContext } from 'react';
import { PokemonType } from 'models';
import { BadgeContainer } from './style';
import { Icon } from '../Icon';
import { View } from 'react-native';
import { Body } from 'components';
import { ThemeContext } from 'styled-components';
import { TypeColors } from 'theme';

type BadgeProps = {
  name: PokemonType | string;
};

export const Badge: React.FC<BadgeProps> = ({ name }) => {
  const badgeLabel = name.charAt(0).toUpperCase() + name.slice(1);
  const theme = useContext(ThemeContext);
  return (
    <BadgeContainer background={TypeColors.get(name)}>
      <View style={{ marginRight: 8 }}>
        <Icon name={name} color={theme.color_text.white} size={12} />
      </View>
      <Body color={theme.color_text.white}>{badgeLabel}</Body>
    </BadgeContainer>
  );
};
