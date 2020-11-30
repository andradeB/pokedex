import { BaseSheet } from '../BaseSheet';
import { Body, Button, Container, H2Header } from 'components';
import { translate } from 'I18N';
import React from 'react';

type SortSheet = {
  onHide: () => void;
  visible: boolean;
};

export const SortSheet: React.FC<SortSheet> = ({ onHide, visible }) => {
  return (
    <BaseSheet onHide={onHide} visible={visible} sheetHeight={550}>
      <Container m={4}>
        <Container mb={3}>
          <H2Header>{translate('SORT_TITLE')}</H2Header>
        </Container>
        <Container mb={3}>
          <Body>{translate('SORT_SUBTITLE_MESSAGE')}</Body>
        </Container>
        <Container mb={3}>
          <Button label={translate('BUTTON_SORT_SMALLEST')} active />
        </Container>
        <Container mb={3}>
          <Button label={translate('BUTTON_HIGHEST_SMALLEST')} />
        </Container>
        <Container mb={3}>
          <Button label="A-Z" />
        </Container>
        <Container mb={3}>
          <Button label="Z-A" />
        </Container>

        <Container
          mb={3}
          style={{
            flexDirection: 'row',
          }}
        >
          <Container
            mr={3}
            style={{
              flex: 1,
            }}
          >
            <Button label={translate('BUTTON_RESET')} />
          </Container>
          <Container
            style={{
              flex: 1,
            }}
          >
            <Button label={translate('BUTTON_APPLY')} active />
          </Container>
        </Container>
      </Container>
    </BaseSheet>
  );
};
