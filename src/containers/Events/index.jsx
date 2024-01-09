/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from './style';
import {
  Header,
  MoreSeenCarousel,
  AutomaticCarousel,
  Footer,
} from '../../components';

/* Glória a Deus */

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
