/* eslint-disable jsx-a11y/anchor-is-valid */
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

/* validar o cartao e deixar o Cards dinamico porque nao esta atualizando em cada campo quando digita nos inputs */

export function PaymentForm() {
  const { userData } = useUser();
  const [focused, setFocused] = useState('');
  const { orderTicket } = useCart();
  const { state } = useLocation();
  const [price] = useState(state);
  const purpleColor = '#7E52DE';

  console.log(orderTicket);

  const changeFocus = (e) => {
    setFocused(e.target.name);
  };

  const schema = Yup.object().shape({
    number: Yup.string().required('Número obrigátorio').min(16),
    name: Yup.string().required('Nome obrigatório'),
    expiry: Yup.string().required('Informe o vencimento'),
    cvv: Yup.string().required('Informe o código cvv').min(3),
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

  useEffect(() => {
    setValue('number', watch('number', ''));
    setValue('name', watch('name', ''));
    setValue('expiry', watch('expiry', ''));
    setValue('cvv', watch('cvv', ''));
  }, [watch, setValue]);

  const onSubmit = async (cardData) => {
    // console.log(cardData);
    try {
      const { state } = await axios.post(
        'http://localhost:3001/create-order',
        {
          orderId: userData.id,
          name: cardData.cvv,
          date: cardData.cvv,
          location: cardData.cvv,
          quantity: cardData.cvv,
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
            <ContainerItem key={ticket.id} column background shadow spacetop>
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
                  {...register('cvv')}
                  error={errors.cvv?.message}
                />
              </div>
            </div>
            <Button type="submit">Confirmar</Button>
          </form>
        </PaymentWrapper>
      </ContainerItem>
    </Container>
  );
}
