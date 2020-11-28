import React from 'react';
import { TopBarContainer, TopBarButton } from './style';
import { H3Header, Icon } from 'components';

export const TopBar: React.FC = () => {
  const data = [
    {
      icon: 'generation',
    },
    {
      icon: 'sort',
    },
    {
      icon: 'filter',
    },
  ];
  return (
    <TopBarContainer mx={4} my={2}>
      {data.map((x) => (
        <TopBarButton
          hitSlop={{
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
          }}
        >
          <Icon name={x.icon} size={20} />
        </TopBarButton>
      ))}
    </TopBarContainer>
  );
};
