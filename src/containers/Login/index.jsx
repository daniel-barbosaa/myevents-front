/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container,
  Text,
  ContainerItem,
  TicketImg,
  Input,
  P,
  Error,
} from './style';
import Ticket from '../../assets/Ticket.svg';
import { Button } from '../../components';

export function Login() {
  /* sessão de login, validando se usuario existe ou nao para prosseguir */

  const [user, setUser] = useState([]);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('Email obrigatório'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(6, 'Mínimo 6 dígitos'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const response = await toast.promise(
      axios.post('http://localhost:3001/session', {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: 'Verificando dados',
        success: 'Bem vindo(a)',
        error: 'Verifique email e senha',
      },
    );
  };

  return (
    <Container>
      <div style={{ width: '400px' }}>
        <Text spacer>
          <TicketImg src={Ticket} />
          MyEvents
        </Text>
        <Text size weigth>
          Faça seu login na plataforma{' '}
        </Text>
      </div>
      <ContainerItem>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Email" type="Email" {...register('email')} />
          <Error>{errors.email?.message}</Error>
          <Input
            placeholder="Senha"
            type="password"
            {...register('password')}
          />
          <Error>{errors.password?.message}</Error>
          <Button spacetop type="submit">
            ENTRAR
          </Button>
          <div />
          <P>
            Não tem uma conta?<a href="#">Registre-se</a>
          </P>
        </form>
      </ContainerItem>
    </Container>
  );
}
