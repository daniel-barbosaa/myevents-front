/* eslint-disable jsx-a11y/anchor-is-valid */

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import moment from 'moment';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

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

export function InfoTicket() {
  const { putOrderTicket, orderTicket } = useCart();
  const location = useLocation();
  const { state } = location;
  const [ticketData, setTicketData] = useState(state.item);

  console.log(orderTicket);

  const purpleColor = '#7E52DE';

  return (
    <Container>
      <Header dark />
      <ContainerItem>
        <Image src={UndrawImg} />
      </ContainerItem>
      <ContainerItem>
        <div style={{ width: '350px' }}>
          <Text spacer>{ticketData.name}</Text>
          <P>
            <CalendarTodayOutlinedIcon
              sx={{ color: purpleColor }}
              fontSize="small"
            />{' '}
            {moment(ticketData.start_date).format('DD/MM/YYYY HH:mm')}
          </P>
          <P>
            <LocationOnOutlinedIcon
              sx={{ color: purpleColor }}
              fontSize="small"
            />{' '}
            {ticketData.address.address}
          </P>
          <div style={{ marginTop: '30px' }}>
            <Text desc>Descrição</Text>
            <P spacetop>{parse(ticketData.detail)}</P>
          </div>
        </div>

        <div style={{ width: '400px' }}>
          <CardIngress>
            <PersonAddOutlinedIcon sx={{ color: '#ffffff' }} fontSize="large" />
            <p>
              Atenção! Para comprar seus ingressos, é necessário estar logado na
              sua conta!
              <a href="#">Clique aqui para entrar.</a>
            </p>
          </CardIngress>
          <ContainerItem column spacetop background shadow>
            <WrapperIngress style={{ display: 'flex' }}>
              <div>
                <Title bold>MEIA ENTRADA PARA TODOS</Title>
                <Title bold>1</Title>
                <Title small>R$ 120,00 (+ R$ 10,20 Taxa)</Title>
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
                R$ 360,00
              </Text>
              <Button
                fontlight
                onClick={() => {
                  putOrderTicket(ticketData);
                }}
              >
                FINALIZAR PEDIDO
              </Button>
            </WrapperIngress>
          </ContainerItem>
        </div>
      </ContainerItem>
    </Container>
  );
}
