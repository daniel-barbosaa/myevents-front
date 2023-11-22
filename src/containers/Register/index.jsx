/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {
  Container,
  Text,
  ContainerItem,
  TicketImg,
  Input,
  Info,
  P,
  LoginBack,
} from './style';
import Ticket from '../../assets/Ticket.svg';
import { Button } from '../../components';

// 6LcvmRYpAAAAAMZwyQmXuDJ_z6hoUGXQSZlidWXY

export function Register() {
  const [capVal, setCapVal] = useState(null);
  return (
    <Container>
      <ContainerItem>
        <form>
          <h1>Crie sua conta</h1>
          <Input type="email" placeholder="E-mail" />
          <Input type="text" placeholder="Seu Nome" />
          <Input type="password" placeholder="Sua senha" />
          <div>
            <ReCAPTCHA
              theme="dark"
              sitekey="6LcvmRYpAAAAAMZwyQmXuDJ_z6hoUGXQSZlidWXY"
              onChange={(val) => setCapVal(val)}
            />
          </div>
          <Button spacetop disable={!capVal}>
            CADASTRAR
          </Button>
          <P center>
            Ao se registrar, você aceita nossos <a href="">termos de uso</a> e a
            nossa <a href="">política de privacidade.</a>
          </P>
        </form>
      </ContainerItem>
      <ContainerItem>
        <Text spacer>
          <TicketImg src={Ticket} />
          MyEvents
        </Text>
        <Info size weigth>
          Milhares de eventos que te espera todos os dias.
        </Info>
        <P>
          Não vai querer perder aquele evento especial que você mais ama né?
          Junte-se a nós
        </P>
        <LoginBack>
          <KeyboardBackspaceIcon />
          <a href="">Voltar para login</a>
        </LoginBack>
      </ContainerItem>
    </Container>
  );
}
