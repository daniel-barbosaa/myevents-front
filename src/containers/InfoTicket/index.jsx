/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
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

/* COLOCAR PARA FUNCIONAR OS BOTOES DE AUMENTAR E RETIRAR INGRESSOS */

export function InfoTicket() {
  const [finalPricer, setFinalPrice] = useState(0);
  const { orderTicket, increaseOrder, decreaseOrder } = useCart();
  const [tax] = useState(10.2);

  const clientInfoData = localStorage.getItem('myevents:ticketInfo');
  const ticket = JSON.parse(clientInfoData);
  const valueTotal = ticket[0].quantity * ticket[0].price;
  const purpleColor = '#7E52DE';

  useEffect(() => {
    const sumAll = ticket.reduce(
      (acc, current) => current.price * current.quantity + acc,
      0,
    );

    setFinalPrice(formatCurrency(sumAll + tax));
  }, [ticket, tax]);

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
                <WrapperIngress style={{ display: 'flex' }}>
                  <div>
                    <Title bold>ESTACIONAMENTO</Title>
                    <Title bold>1</Title>
                    <Title small>R$ 15,00 (+ R$ 3,00 Taxa)</Title>
                  </div>
                  <ButtonAdd>
                    <i>
                      <RemoveOutlinedIcon sx={{ color: '#ffffff' }} />
                    </i>
                    <p>1</p>
                    <i>
                      <AddOutlinedIcon sx={{ color: '#ffffff' }} />
                    </i>
                  </ButtonAdd>
                </WrapperIngress>
                <WrapperIngress column>
                  <Title>Código promocional</Title>
                  <div style={{ display: 'flex', gap: '70px' }}>
                    <InputDescount type="text" placeholder="Insira o código" />
                    <Button fontlight small>
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
                    {finalPricer}
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
