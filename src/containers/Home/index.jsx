/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { StyleSheetManager } from 'styled-components';
import { Container } from './style';
import {
  Header,
  ListCategory,
  MoreSeenCarousel,
  AutomaticCarousel,
  CheckOutCarousel,
  Footer,
} from '../../components';

/* COLOCAR O BOTAO DE LOADER NA TELA DE LOGIN E REGISTER E FAZER O DEPLOY DA APLICAÇÃO */

export function Home() {
  const [loggedUser, setLoggerUser] = useState(false);
  const filteredProps = [
    'isRTL',
    'verticalMode',
    'sliderPosition',
    'swipedSliderPosition',
    'isSwiping',
    'transitionMs',
    'tiltEasing',
    'outerSpacing',
    'active',
    'itemPosition',
  ];

  const userLogged = async () => {
    const clientInfo = await localStorage.getItem('myevents:userData');

    if (clientInfo) {
      setLoggerUser(true);
    }
  };
  userLogged();

  return (
    <Container>
      <StyleSheetManager
        shouldForwardProp={(prop) => !filteredProps.includes(prop)}
      >
        {loggedUser && <Header spacer="true" />}
        <ListCategory />
        <MoreSeenCarousel />
        {loggedUser && <CheckOutCarousel />}
        <AutomaticCarousel />
        <Footer />
      </StyleSheetManager>
    </Container>
  );
}
