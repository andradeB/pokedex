import React, { useContext } from 'react';
import { storiesOf } from '@storybook/react-native';
import { Icon } from './';
import { IconItemListContainer, IconCircle } from './Icon.stories.style';
import { BodyBold } from 'components';
import { FlatList, View } from 'react-native';
import data from './selection.json';
import { TypeColors } from 'theme';

type ItemProps = {
  item: {
    properties: {
      name: string;
    };
  };
};

storiesOf('Icons', module).add('Components', () => {
  const renderItem: React.FC<ItemProps> = ({ item }) => (
    <IconItemListContainer name={item.properties.name}>
      <IconCircle>
        <Icon name={item.properties.name} size={32} color={TypeColors.get(item.properties.name)} />
      </IconCircle>
      <View
        style={{
          marginLeft: 16,
        }}
      >
        <BodyBold color={'#00000077'}>{item.properties.name}</BodyBold>
      </View>
    </IconItemListContainer>
  );

  return (
    <View
      style={{
        marginHorizontal: 16,
      }}
    >
      <FlatList
        data={data.icons}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.properties.name}-${index}`}
      />
    </View>
  );
});
