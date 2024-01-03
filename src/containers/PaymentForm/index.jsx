/* eslint-disable jsx-a11y/anchor-is-valid */
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import Cards from 'react-credit-cards-2';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useCart } from '../../hooks/TicketContext';
import { useUser } from '../../hooks/UserContext';
import formatCurrency from '../../utils/formatedCurrency';

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

import { Header, Button } from '../../components';



export function PaymentForm() {
  const { userData } = useUser();
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focused, setFocused] = useState('');
  const { orderTicket } = useCart();
  const { state } = useLocation();
  const [price] = useState(state);
  const purpleColor = '#7E52DE';

  const changeFocus = (e) => {
    setFocused(e.target.name);
  };

  const handleCardNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleCVCChange = (e) => {
    setCvc(e.target.value);
  };

  const handleExpiryChange = (e) => {
    setExpiry(e.target.value);
  };

  const handleNameChange = (e) => {
    const validatedName = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setName(validatedName);
  };

  const schema = Yup.object().shape({
    number: Yup.string().required('Número obrigátorio'),
    name: Yup.string().required('Nome obrigatório'),
    validate: Yup.string().required('Informe o vencimento'),
    cvv: Yup.string().required('Informe o código cvv'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    try {
      const { state } = await axios.post(
        '/create-order',
        {
          orderId: userData.id,
          name: orderTicket.name,
          date: orderTicket.start_date,
          location: orderTicket.address.address,
          quantity: orderTicket.quantity,
        },
        {
          validateStatus: () => true,
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Header dark />

      <ContainerItem gap align>
        {orderTicket &&
          orderTicket.map((ticket) => (
            <ContainerItem column background shadow spacetop>
              <WrapperIngress column>
                {' '}
                <Text spacer>{ticket.name}</Text>
                <P>
                  <CalendarTodayOutlinedIcon
                    sx={{ color: purpleColor }}
                    fontSize="small"
                  />{' '}
                  {moment(ticket.start_date).format('DD/MM/YYYY HH:mm')}
                </P>
                <P spacetop>
                  <LocationOnOutlinedIcon
                    sx={{ color: purpleColor }}
                    fontSize="small"
                  />{' '}
                  {ticket.address.address}
                </P>
              </WrapperIngress>
              <WrapperIngress column>
                <Text border padding spacer>
                  Resumo da compra
                </Text>
                <P spacetop>{ticket.name}</P>
              </WrapperIngress>
              <WrapperIngress column>
                <Title bold>
                  {ticket.quantity}x Ingresso{' '}
                  <i>{formatCurrency(ticket.price * ticket.quantity)}</i>
                </Title>
                <Title bold>
                  Taxa <i>R$10,20</i>
                </Title>
                {ticket.estacionamento && (
                  <Title bold>
                    Estacionamento <i>15,00</i>
                  </Title>
                )}
              </WrapperIngress>
              <WrapperIngress column bordernone>
                <Title bold>
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

        <PaymentWrapper width padding>
          <Title bold style={{ marginBottom: '20px' }}>
            FORMA DE PAGAMENENTO
          </Title>
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
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
              type="text"
              placeholder="Número"
              onChange={handleCardNumberChange}
              onFocus={changeFocus}
            />
            <p>{errors.number?.message}</p>

            <Label>Nome do titular</Label>
            <Input
              type="text"
              placeholder="Nome"
              name="name"
              onChange={handleNameChange}
              onFocus={changeFocus}
            />
            {errors.name?.message}

            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ width: '50%' }}>
                <Label>Vencimento</Label>
                <Input
                  mask="99/99"
                  type="text"
                  placeholder="Válidade"
                  onChange={handleExpiryChange}
                  onFocus={changeFocus}
                />
                {errors.validate?.message}
              </div>
              <div>
                <Label>CVV</Label>
                <Input
                  mask="999"
                  type="text"
                  placeholder="123"
                  name="cvc"
                  onChange={handleCVCChange}
                  onFocus={changeFocus}
                />
                {errors.cvv?.message}
              </div>
            </div>
            <Button onClick={onSubmit}>Confirmar</Button>
          </form>
        </PaymentWrapper>
      </ContainerItem>
    </Container>
  );
}
