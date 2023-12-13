/* eslint-disable jsx-a11y/anchor-is-valid */
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

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

import { Header } from '../../components';

export function Tickets() {
  const purpleColor = '#7E52DE';

  return (
    <Container>
      <Header />
      <ContainerItem>
        <Title>Meus ingressos</Title>
        {Array.from({ length: 8 }).map(() => (
          <Ticket>
            <div style={{ padding: '20px' }}>
              <EventName>Sunset nigth</EventName>
              <Text large bottom>
                09 de janeiro de 2023, 17:00
              </Text>
              <Text>
                <LocationOnOutlinedIcon fontSize="small" />
                Avenida lafetá celestino 433 - Villa Ipiranga, Montes claros -
                Minas Gerais
              </Text>
            </div>
            <FooterTicket>
              <Text>
                <img src={ImgTicket} />1 Ingressos
              </Text>
            </FooterTicket>
          </Ticket>
        ))}

        {/* <Ticket>
          <div style={{ padding: '20px' }}>
            <EventName>Sunset nigth</EventName>
            <Text large bottom>
              09 de janeiro de 2023, 17:00
            </Text>
            <Text>
              <LocationOnOutlinedIcon fontSize="small" />
              Avenida lafetá celestino 433 - Villa Ipiranga, Montes claros -
              Minas Gerais
            </Text>
          </div>

          <FooterTicket>
            <Text>
              <img src={ImgTicket} />
              1 Ingressos
            </Text>
          </FooterTicket>
        </Ticket> */}
      </ContainerItem>
    </Container>
  );
}
