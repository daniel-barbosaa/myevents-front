/* eslint-disable jsx-a11y/anchor-is-valid */
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useUser } from '../../hooks/UserContext';
import { NoTickets, Header } from '../../components';
import { Loader } from '../../components/Loader';

import ImgTicket from '../../assets/two-tickets.svg';
import {
  Container,
  ContainerItem,
  Ticket,
  Title,
  EventName,
  Text,
  FooterTicket,
} from './style';

export function Tickets() {
  const purpleColor = '#7E52DE';
  const { userData } = useUser();
  const [noTickets, setNoTickets] = useState(false);
  const [clientTicket, setClientTickets] = useState([]);

  useEffect(() => {
    async function loadTickets() {
      try {
        if (userData.id) {
          const { data } = await axios.get(
            `http://localhost:3001/orders/${userData.id}`,
          );
          if (data.length === 0) {
            setNoTickets(true);
          } else {
            await localStorage.setItem('clientTickets', JSON.stringify(data));
            setClientTickets(data);
          }
        }
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    }

    const storedTicket = localStorage.getItem('clientTickets');
    if (storedTicket) {
      setClientTickets(JSON.parse(storedTicket));
    } else {
      loadTickets();
    }
  }, [userData.id]);

  return (
    <Container>
      <Header />
      {noTickets ? (
        <NoTickets />
      ) : (
        <ContainerItem>
          <Title>Meus ingressos</Title>
          {clientTicket.map((ticket) => (
            <Ticket>
              <div style={{ padding: '20px' }}>
                <EventName>{ticket.name}</EventName>
                <Text large bottom>
                  {moment(ticket.date).format('DD/MM/YYYY HH:mm')}
                </Text>
                <Text>
                  <LocationOnOutlinedIcon fontSize="small" />
                  {ticket.location}
                </Text>
              </div>
              <FooterTicket>
                <Text>
                  <img src={ImgTicket} />
                  {ticket.quantity} Ingressos
                </Text>
              </FooterTicket>
            </Ticket>
          ))}
        </ContainerItem>
      )}
    </Container>
  );
}
