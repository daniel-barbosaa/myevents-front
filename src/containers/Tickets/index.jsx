/* eslint-disable jsx-a11y/anchor-is-valid */
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useUser } from '../../hooks/UserContext';
import { NoTickets, Header, PropsFilterError } from '../../components';

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
  const { userData } = useUser();
  const [noTickets, setNoTickets] = useState(false);
  const [clientTicket, setClientTickets] = useState([]);

  useEffect(() => {
    async function loadTickets() {
      try {
        if (userData.id) {
          const { data } = await axios.get(
            `https://fastity-api.vercel.app/orders/${userData.id}`,
          );
          if (data.length === 0) {
            setNoTickets(true);
          } else {
            await localStorage.setItem('clientTickets', JSON.stringify(data));
            setClientTickets(data);
          }
        }
      } catch (error) {
        throw new Error(error);
        // console.error('Erro ao buscar eventos:', error);
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
      <PropsFilterError>
        <Header />
        {noTickets ? (
          <NoTickets />
        ) : (
          <ContainerItem>
            <Title>Meus ingressos</Title>
            {clientTicket.map((ticket) => (
              <Ticket key={ticket.name}>
                <div style={{ padding: '20px' }}>
                  <EventName>{ticket.name}</EventName>
                  <Text large="true" bottom="true">
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
      </PropsFilterError>
    </Container>
  );
}
