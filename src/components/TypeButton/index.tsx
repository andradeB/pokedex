import React, { useContext } from 'react';
import { PokemonType, Height, Weight } from 'models';
import { TypeButtonContainer } from './style';
import { TypeBackgroundColors, HeightColors, WeightColors } from 'theme';
import { Icon } from '../Icon';
import { ThemeContext } from 'styled-components';
import Svg, { Defs, Ellipse, RadialGradient, Stop } from 'react-native-svg';

type TypeButton = {
  name: PokemonType | Height | Weight;
  active?: boolean;
};

export const TypeButton: React.FC<TypeButton> = ({ active, name }) => {
  const theme = useContext(ThemeContext);

  const typeColor = TypeBackgroundColors.get(name);
  const heightColor = HeightColors.get(name);
  const widthColor = WeightColors.get(name);

  const iconName =
    (typeColor && name) || (heightColor && `height-${name}`) || (widthColor && `width-${name}`);

  const backgroundColor = typeColor || heightColor || widthColor;
  return (
    <TypeButtonContainer background={active ? backgroundColor : theme.color_text.white}>
      <Icon name={iconName} size={18} color={active ? theme.color_text.white : backgroundColor} />
      {active && (
        <Svg
          height="80"
          width="80"
          style={{
            position: 'absolute',
            zIndex: -1,
          }}
        >
          <Defs>
            <RadialGradient
              id="grad"
              rx="30"
              ry="30"
              cx="40"
              cy="50"
              fx="30"
              fy="30"
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0" stopColor={backgroundColor} stopOpacity="1" />
              <Stop offset="1" stopColor={backgroundColor} stopOpacity="0" />
            </RadialGradient>
          </Defs>
          <Ellipse cx="40" cy="50" rx="30" ry="30" fill="url(#grad)" />
        </Svg>
      )}
    </TypeButtonContainer>
  );
};
