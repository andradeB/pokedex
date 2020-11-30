import React from 'react';
import { TopBarContainer, TopBarButton } from './style';
import { Icon } from '../Icon';

export type TopBarActionTypes = 'generation' | 'sort' | 'filter';
export type TopBarProps = {
  onAction: (type: TopBarActionTypes) => void;
};

export const TopBar: React.FC<TopBarProps> = ({ onAction }) => {
  const data: Array<{ icon: TopBarActionTypes }> = [
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
      {data.map((x, index) => (
        <TopBarButton
          onPress={() => onAction(x.icon)}
          key={`topbar-${index}-${x}`}
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
