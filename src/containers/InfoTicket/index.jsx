/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Checkbox from '@mui/material/Checkbox';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import moment from 'moment';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import formatCurrency from '../../utils/formatedCurrency';

import { useCart } from '../../hooks/TicketContext';

import {
  Container,
  Text,
  ContainerItem,
  Image,
  P,
  CardIngress,
  ButtonAdd,
  Title,
  InputDescount,
  WrapperIngress,
} from './style';
import UndrawImg from '../../assets/undraw-happy.svg';
import { Header, Button } from '../../components';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
/**/

export function InfoTicket() {
  const { orderTicket, increaseOrder, decreaseOrder } = useCart();
  const [discountInput, setDiscount] = useState('BORABIL'.toUpperCase());
  const [finalPrice, setFinalPrice] = useState(0);
  const [tax] = useState(10.2);
  const [parking, setParking] = useState(false);
  const [withDiscount, setWithDiscount] = useState(false);

  const clientInfoData = localStorage.getItem('myevents:ticketInfo');
  const ticket = JSON.parse(clientInfoData);
  const purpleColor = '#7E52DE';

  const discountCoupon = () => {
    setWithDiscount(true);
    if (discountInput.length >= 7) {
      toast.success('Cupom de 10% adicionado');
    }
  };
  const handleChange = (event) => {
    const novoValor = event.target.value.toUpperCase();
    if (novoValor.length < 6) {
      setWithDiscount(false);
    }
    setDiscount(novoValor);
  };

  useEffect(() => {
    const sumAll = ticket.reduce(
      (acc, current) => current.price * current.quantity + acc,
      0,
    );

    const parkingCost = parking ? 15 : 0;
    if (withDiscount) {
      const discountAmount = discountInput.length > 6 ? 10 : 0;
      const total = sumAll + tax + parkingCost - discountAmount;
      setFinalPrice(total);
    } else {
      const total = sumAll + tax + parkingCost;
      setFinalPrice(total);
    }
  }, [ticket, tax, parking, discountInput]);

  const handleParkingChange = () => {
    setParking((prevParking) => !prevParking);
  };

  return (
    <Container>
      <Header dark />
      <ContainerItem>
        <Image src={UndrawImg} />
      </ContainerItem>
      {orderTicket &&
        orderTicket.map((ticket) => (
          <ContainerItem>
            <div style={{ width: '350px' }}>
              <Text spacer>{ticket.name}</Text>
              <P>
                <CalendarTodayOutlinedIcon
                  sx={{ color: purpleColor }}
                  fontSize="small"
                />{' '}
                {moment(ticket.start_date).format('DD/MM/YYYY HH:mm')}
              </P>
              <P>
                <LocationOnOutlinedIcon
                  sx={{ color: purpleColor }}
                  fontSize="small"
                />{' '}
                {ticket.address.address}
              </P>
              <div style={{ marginTop: '30px' }}>
                <Text desc>Descrição</Text>
                <P spacetop>{parse(ticket.detail)}</P>
              </div>
            </div>

            <div style={{ width: '400px' }}>
              <CardIngress>
                <PersonAddOutlinedIcon
                  sx={{ color: '#ffffff' }}
                  fontSize="large"
                />
                <p>
                  Atenção! Para comprar seus ingressos, é necessário estar
                  logado na sua conta!
                  <a href="#">Clique aqui para entrar.</a>
                </p>
              </CardIngress>
              <ContainerItem column spacetop background shadow>
                <WrapperIngress style={{ display: 'flex' }}>
                  <div>
                    <Title bold>MEIA ENTRADA PARA TODOS</Title>
                    <Title bold>1</Title>
                    <Title small>
                      {formatCurrency(ticket.price)} + ({formatCurrency(tax)} de
                      taxa)
                    </Title>
                  </div>
                  <ButtonAdd>
                    <i
                      onClick={() => {
                        decreaseOrder(ticket);
                      }}
                    >
                      <RemoveOutlinedIcon sx={{ color: '#ffffff' }} />
                    </i>
                    <p>{ticket.quantity}</p>
                    <i
                      onClick={() => {
                        increaseOrder(ticket);
                      }}
                    >
                      <AddOutlinedIcon sx={{ color: '#ffffff' }} />
                    </i>
                  </ButtonAdd>
                </WrapperIngress>
                <WrapperIngress
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <Title bold>ESTACIONAMENTO</Title>
                    <Title small>R$ 15,00</Title>
                  </div>
                  <div>
                    <Checkbox
                      {...label}
                      defaultChecked={parking}
                      onChange={handleParkingChange}
                      color="default"
                    />
                  </div>
                </WrapperIngress>
                <WrapperIngress column>
                  <Title>Código promocional</Title>
                  <div style={{ display: 'flex', gap: '70px' }}>
                    <InputDescount
                      type="text"
                      placeholder="Insira o código"
                      onChange={handleChange}
                      value={discountInput}
                    />
                    <Button
                      fontlight
                      small
                      onClick={() => {
                        discountCoupon();
                      }}
                    >
                      APLICAR
                    </Button>
                  </div>
                </WrapperIngress>
                <WrapperIngress bordernone column center>
                  <Text spacer>
                    <ShoppingCartOutlinedIcon
                      sx={{ color: '#7e5ede' }}
                      fontSize="large"
                    />
                    {formatCurrency(finalPrice)}
                  </Text>
                  <Button fontlight>FINALIZAR PEDIDO</Button>
                </WrapperIngress>
              </ContainerItem>
            </div>
          </ContainerItem>
        ))}
    </Container>
  );
}
