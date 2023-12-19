/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
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
  const [user, setUser] = useState([]);
  const [noValid, setNoValid] = useState(false);

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
    try {
      const { response } = await axios.post('http://localhost:3001/session', {
        email: clientData.email,
        password: clientData.password,
      });
      toast.success('usuario logado com sucesso');
      if (response.status === 500) {
        console.log('usuario nao encontrado');
      }
      console.log(response);
    } catch (error) {
      console.log('algo deu erro');
    }
  };

  console.log(user);

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
