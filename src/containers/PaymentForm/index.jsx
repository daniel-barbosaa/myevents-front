/* eslint-disable jsx-a11y/anchor-is-valid */
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import moment from 'moment';
import axios from 'axios';
import Cards from 'react-credit-cards-2';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Loader } from '../../components/Loader';
import { useCart } from '../../hooks/TicketContext';
import { useUser } from '../../hooks/UserContext';
import formatCurrency from '../../utils/formatedCurrency';
import {
  RegistrationConfirmed,
  Header,
  Button,
  PropsFilterError,
} from '../../components';
import {
  Container,
  Text,
  ContainerItem,
  P,
  Title,
  Input,
  WrapperIngress,
  Label,
  PaymentWrapper,
} from './style';

/* integrar a api na tela de ingresso  */

export function PaymentForm() {
  const [paymentConfirmed, setPaymentConfirmed] = useState(true);
  const [isLoader, setIsLoader] = useState(false);
  const { userData } = useUser();
  const [focused, setFocused] = useState('');
  const { orderTicket } = useCart();
  const { state } = useLocation();
  const [price] = useState(state);
  const purpleColor = '#7E52DE';

  const changeFocus = (e) => {
    setFocused(e.target.name);
  };

  const schema = Yup.object().shape({
    number: Yup.string().required('Número obrigátorio').min(16),
    name: Yup.string().required('Nome obrigatório'),
    expiry: Yup.string().required('Informe o vencimento'),
    cvc: Yup.string().required('Informe o código cvv').min(3),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const meuRef = useRef();
  useEffect(() => {
    setValue('number', watch('number', ''));
    setValue('name', watch('name', ''));
    setValue('expiry', watch('expiry', ''));
    setValue('cvc', watch('cvc', ''));
    const node = meuRef.current;
  }, [watch, setValue]);

  const onSubmit = async () => {
    const infoTicket = orderTicket[0];
    try {
      setIsLoader(true);
      const { status } = await axios.post(
        'http://localhost:3001/create-order',
        {
          orderId: userData.id,
          name: infoTicket.name,
          date: infoTicket.start_date,
          location: infoTicket.address.address,
          quantity: infoTicket.quantity,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200) {
        setInterval(() => {
          setPaymentConfirmed(false);
        }, 1000);
      }
      setPaymentConfirmed(true);
      setIsLoader(false);
    } catch (err) {
      throw new Error();
    }
  };

  return (
    <Container>
      <PropsFilterError>
        <Header dark="true" />
        {paymentConfirmed ? (
          <ContainerItem gap="true" align="true">
            {orderTicket &&
              orderTicket.map((ticket) => (
                <ContainerItem
                  key={ticket.id}
                  column="true"
                  background="true"
                  shadow="true"
                  spacetop="true"
                >
                  <WrapperIngress column="true">
                    {' '}
                    <Text spacer="true">{ticket.name}</Text>
                    <P>
                      <CalendarTodayOutlinedIcon
                        sx={{ color: purpleColor }}
                        fontSize="small"
                      />{' '}
                      {moment(ticket.start_date).format('DD/MM/YYYY HH:mm')}
                    </P>
                    <P spacetop="true">
                      <LocationOnOutlinedIcon
                        sx={{ color: purpleColor }}
                        fontSize="small"
                      />{' '}
                      {ticket.address.address}
                    </P>
                  </WrapperIngress>
                  <WrapperIngress column="true">
                    <Text border="true" padding="true" spacer="true">
                      Resumo da compra
                    </Text>
                    <P spacetop="true">{ticket.name}</P>
                  </WrapperIngress>
                  <WrapperIngress column="true">
                    <Title bold="true">
                      {ticket.quantity}x Ingresso{' '}
                      <i>{formatCurrency(ticket.price * ticket.quantity)}</i>
                    </Title>
                    <Title bold="true">
                      Taxa <i>R$10,20</i>
                    </Title>
                    {ticket.estacionamento && (
                      <Title bold="true">
                        Estacionamento <i>15,00</i>
                      </Title>
                    )}
                  </WrapperIngress>
                  <WrapperIngress column="true" bordernone="true">
                    <Title bold="true">
                      TOTAL{' '}
                      <i
                        style={{
                          opacity: '1',
                          fontSize: '20px',
                          color: '#7E52DE',
                          fontWeight: 'bold',
                        }}
                      >
                        {formatCurrency(price)}
                      </i>
                    </Title>
                  </WrapperIngress>
                </ContainerItem>
              ))}

            <PaymentWrapper width="true" padding="true">
              <Title bold="true" style={{ marginBottom: '20px' }}>
                FORMA DE PAGAMENENTO
              </Title>
              <Cards
                number={watch('number', '')}
                name={watch('name', '')}
                expiry={watch('expiry', '')}
                cvc={watch('cvc', '')}
                focused={focused}
              />
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                style={{ marginTop: '20px' }}
              >
                <Label>Número do cartão</Label>
                <Input
                  mask="9999 9999 9999 9999"
                  maskChar=""
                  type="text"
                  placeholder="2323 2323 2323 2323"
                  onFocus={changeFocus}
                  {...register('number')}
                  error={errors.number?.message}
                />

                <Label>Nome do titular</Label>
                <Input
                  mask="aaaaaaaaaaaaaaaaaaaaaaaaa"
                  type="text"
                  maskChar=" "
                  placeholder="Nome"
                  onFocus={changeFocus}
                  {...register('name')}
                  error={errors.name?.message}
                />
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ width: '50%' }}>
                    <Label>Vencimento</Label>
                    <Input
                      mask="99/99"
                      type="text"
                      maskChar=""
                      placeholder="12/28"
                      onFocus={changeFocus}
                      {...register('expiry')}
                      error={errors.expiry?.message}
                    />
                  </div>
                  <div>
                    <Label>CVV</Label>
                    <Input
                      mask="999"
                      type="text"
                      placeholder="123"
                      maskChar=""
                      onFocus={changeFocus}
                      {...register('cvc')}
                      error={errors.cvc?.message}
                    />
                  </div>
                </div>
                <Button type="submit">
                  {isLoader ? <Loader color="#ffffff" /> : 'Confirmar'}
                </Button>
              </form>
            </PaymentWrapper>
          </ContainerItem>
        ) : (
          <RegistrationConfirmed />
        )}
      </PropsFilterError>
    </Container>
  );
}
