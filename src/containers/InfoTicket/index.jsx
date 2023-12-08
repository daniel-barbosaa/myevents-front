/* eslint-disable jsx-a11y/anchor-is-valid */

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {
  Container,
  Text,
  ContainerItem,
  Image,
  P,
  CardIngress,
  CardIngressSelect,
  ButtonAdd,
} from './style';
import UndrawImg from '../../assets/undraw-happy.svg';
import {
  Header,
  ListCategory,
  MoreSeenCarousel,
  AutomaticCarousel,
  Footer,
  Description,
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
        <div style={{ width: '350px' }}>
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
          <div style={{ marginTop: '30px' }}>
            <Text desc> Descrição</Text>
            <P spacetop>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor, et eum iure incidunt amet omnis quasi quibusdam rerum
              consequatur harum vel sunt, nemo ullam iste odio minima, illum
              molestias.
            </P>
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
          <CardIngressSelect>
            <div style={{ display: 'flex' }}>
              <div >
                <P>MEIA ENTRADA PARA TODOS</P>
                <P>1</P>
                <P>R$ 120,00 (+ R$ 10,20 Taxa)</P>
              </div>
              <ButtonAdd>
                <i>
                  <RemoveOutlinedIcon sx={{ color: '#ffffff' }} />
                </i>
                <p style={{ fontSize: '20px' }}>1</p>
                <i>
                  <AddOutlinedIcon sx={{ color: '#ffffff' }} />
                </i>
              </ButtonAdd>
            </div>
          </CardIngressSelect>
        </div>
      </ContainerItem>
    </Container>
  );
}
