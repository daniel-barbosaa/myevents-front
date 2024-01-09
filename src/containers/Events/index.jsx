/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Container } from './style';
import {
  Header,
  ListCategory,
  MoreSeenCarousel,
  AutomaticCarousel,
  Footer,
} from '../../components';

export function Events() {
  return (
    <Container>
      <Header spacer login />
      <MoreSeenCarousel />
      <AutomaticCarousel />
      <Footer />
    </Container>
  );
}
