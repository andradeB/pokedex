import React from 'react';
import { Container, ScreenContainer } from 'components';
import { TopBar } from 'components';

export const HomeScreen: React.FC = () => (
  <ScreenContainer>
    <Container mx={4} my={2}>
      <TopBar />
    </Container>
  </ScreenContainer>
);
