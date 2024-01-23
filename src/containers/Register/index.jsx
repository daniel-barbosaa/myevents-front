/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  Container,
  Text,
  ContainerItem,
  TicketImg,
  Input,
  Info,
  P,
  LoginBack,
  Error,
  Form,
} from './style';
import Ticket from '../../assets/Ticket.svg';
import { Button, PropsFilterError } from '../../components';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/Loader';

export function Register() {
  const [isLoader, setIsLoader] = useState(false);
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
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
      setIsLoader(true);
      const { status } = await axios.post(
        'https://fastity-api.vercel.app/register',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        {
          validateStatus: () => true,
        },
      );
      if (status === 201 || status === 200) {
        toast.success('Cadastrado criado com sucesso, faça login');
        navigate('/login');
        setIsLoader(false);
      } else if (status === 409) {
        toast.error('Email já existe, faça login para continuar');
        setIsLoader(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Erro ao se cadastrar, tente novamente');
      setIsLoader(false);
    }
  };

  return (
    <Container>
      <ContainerItem>
        <PropsFilterError>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <h1>Crie sua conta</h1>
            <div>
              <Input type="email" placeholder="E-mail" {...register('email')} />
              <Error>{errors.email?.message}</Error>
            </div>
            <div>
              <Input type="text" placeholder="Seu Nome" {...register('name')} />
              <Error>{errors.name?.message}</Error>
            </div>
            <div>
              <Input
                type="password"
                placeholder="Sua senha"
                {...register('password')}
              />
              <Error>{errors.password?.message}</Error>
            </div>

            <Button spacetop="true">
              {isLoader ? <Loader color="#ffffff" size={20} /> : 'CADASTRAR'}
            </Button>
            <P center="true">
              Ao se registrar, você aceita nossos <a href="">termos de uso</a> e
              a nossa <a href="">política de privacidade.</a>
            </P>
          </Form>
        </PropsFilterError>
      </ContainerItem>
      <ContainerItem>
        <PropsFilterError>
          <Text spacer="true">
            <TicketImg src={Ticket} />
            MyEvents
          </Text>
          <Info size="true" weigth="true">
            Milhares de eventos que te espera todos os dias.
          </Info>
          <P>
            Não vai querer perder aquele evento especial que você mais ama né?
            Junte-se a nós
          </P>
          <LoginBack>
            <KeyboardBackspaceIcon />
            <a href="/login">Voltar para login</a>
          </LoginBack>
        </PropsFilterError>
      </ContainerItem>
    </Container>
  );
}
