/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Container } from './style';
import {
  Header,
  ListCategory,
  MoreSeenCarousel,
  AutomaticCarousel,
  CheckOutCarousel,
  Footer,
} from '../../components';

/*
  Criar rota privada, se o usuário estiver logado nao permitir ele ir para rota de login, register, home não logado da aplicação
*/

export function Home() {
  const [loggedUser, setLoggerUser] = useState(false);

  const userLogged = async () => {
    const clientInfo = await localStorage.getItem('myevents:userData');

    if (clientInfo) {
      setLoggerUser(true);
    }
  };
  userLogged();

  return (
    <Container>
      {loggedUser ? <Header spacer /> : <Header spacer login />}
      <ListCategory />
      <MoreSeenCarousel />
      {loggedUser && <CheckOutCarousel />}
      <AutomaticCarousel />
      <Footer />
    </Container>
  );
}
