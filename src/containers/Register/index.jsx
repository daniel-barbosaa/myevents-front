/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';
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
} from './style';
import Ticket from '../../assets/Ticket.svg';
import { Button } from '../../components';

// 6LcvmRYpAAAAAMZwyQmXuDJ_z6hoUGXQSZlidWXY

export function Register() {
  const [capVal, setCapVal] = useState(null);

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
      const { status } = await axios.post(
        'http://localhost:3001/register',
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
        toast.success('Cadastrado criado com sucesso');
      } else if (status === 409) {
        toast.error('Email já existe, faça login para continuar');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Erro no sistema, tente novamente');
    }
  };

  return (
    <Container>
      <ContainerItem>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
