/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Text, ContainerItem, TicketImg, Input, P } from './style';
import Ticket from '../../assets/Ticket.svg';
import { Button } from '../../components';

export function Login() {
  /* INICIANDO VALIDACAO DO LOGIN COM REACT-ROOK FORM

    ASSISTIR AULA 339
  */
  const [user, setEvents] = useState([]);
  useEffect(() => {
    async function loadEvents() {
      try {
        const { data } = await axios.get('http://localhost:3001/users');
        setEvents(data);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    }
    loadEvents();
  }, []);

  console.log(user);

  const [value, setValue] = useState('');
  return (
    <Container>
      <ContainerItem>
        <Text spacer>
          <TicketImg src={Ticket} />
          MyEvents
        </Text>
        <Text size weigth>
          Faça seu login na plataforma{' '}
        </Text>
      </ContainerItem>
      <ContainerItem>
        <form action="">
          <Input placeholder="Email" type="Email" />
          <Input placeholder="Senha" type="password" />
          <Button spacetop>ENTRAR</Button>
          <div />
          <P>
            Não tem uma conta?<a href="#">Registre-se</a>
          </P>
        </form>
      </ContainerItem>
    </Container>
  );
}
