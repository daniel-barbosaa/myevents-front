/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Container, Text, ContainerItem, TicketImg, Input, P } from './style';
import Ticket from '../../assets/Ticket.svg';
import { InputPassword, InputText, Button } from '../../components';

export function Login() {
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
