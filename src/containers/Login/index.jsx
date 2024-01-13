/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useUser } from '../../hooks/UserContext';
import {
  Container,
  Text,
  ContainerItem,
  TicketImg,
  Input,
  P,
  Error,
  WrapperLogin,
  Form,
} from './style';
import Ticket from '../../assets/Ticket.svg';
import { Button } from '../../components';

/* DEIXAR PROJETO RESPONSIVO FAZER TELA POR TELA DE CADA VEZ */

const shouldForwardProp = (prop) => !prop.startsWith();

export function Login() {
  const [validProp] = useState('true');
  const navigate = useNavigate();
  const { putUserData } = useUser();

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
      const { data, status } = await axios.post(
        'http://localhost:3001/session',
        {
          email: clientData.email,
          password: clientData.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        putUserData(data);
        setTimeout(() => {
          toast.success('Seja bem vindo(a)');
          navigate('/');
        }, 1000);
      } else if (status === 404) {
        toast.error('Usuário não encontrado');
      } else if (status === 403) {
        toast.error('Senha incorreta');
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error('Erro no sistema, tente novamente');
    }
  };

  return (
    <Container>
      <WrapperLogin>
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <Text spacer={validProp}>
            <TicketImg src={Ticket} />
            MyEvents
          </Text>
          <Text size={validProp} weigth={validProp}>
            Faça seu login na plataforma{' '}
          </Text>
        </StyleSheetManager>
      </WrapperLogin>
      <ContainerItem>
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="Email" type="Email" {...register('email')} />
            <Error>{errors.email?.message}</Error>
            <Input
              placeholder="Senha"
              type="password"
              {...register('password')}
            />
            <Error>{errors.password?.message}</Error>
            <Button spacetop={validProp} type="submit">
              ENTRAR
            </Button>
            <div />
            <P>
              Não tem uma conta?<a href="/registrar">Registre-se</a>
            </P>
          </Form>
        </StyleSheetManager>
      </ContainerItem>
    </Container>
  );
}
