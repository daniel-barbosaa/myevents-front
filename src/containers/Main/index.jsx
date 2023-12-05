/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Container, Text, ContainerItem, TicketImg, Input, P } from './style';
import {
  Header,
  ListCategory,
  MoreSeenCarousel,
  AutomaticCarousel,
  Footer,
  CheckOutCarousel,
} from '../../components';

export function Main() {
  return (
    <Container>
      <Header spacer />
      <ListCategory />
      <MoreSeenCarousel />
      <CheckOutCarousel />
      <AutomaticCarousel />
      <Footer />
    </Container>
  );
}
