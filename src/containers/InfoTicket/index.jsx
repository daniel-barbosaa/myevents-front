/* eslint-disable jsx-a11y/anchor-is-valid */

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Container, Text, ContainerItem, Image, P } from './style';
import UndrawImg from '../../assets/undraw-happy.svg';
import {
  Header,
  ListCategory,
  MoreSeenCarousel,
  AutomaticCarousel,
  Footer,
} from '../../components';

export function InfoTicket() {
  const purpleColor = '#7E52DE';
  return (
    <Container>
      <Header stylelight />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={UndrawImg} />
      </div>
      <ContainerItem>
        <div>
          <Text spacer>SUNSET-NIGHT</Text>
          <P>
            <CalendarTodayOutlinedIcon
              sx={{ color: purpleColor }}
              fontSize="small"
            />{' '}
            09 de janeiro de 2023, 17:00
          </P>
          <P>
            <LocationOnOutlinedIcon
              sx={{ color: purpleColor }}
              fontSize="small"
            />{' '}
            Avenida lafetá celestino 433 - Villa Ipiranga Montes claros - Minas
            Gerais
          </P>
        </div>
      </ContainerItem>
    </Container>
  );
}
