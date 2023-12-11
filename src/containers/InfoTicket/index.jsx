/* eslint-disable jsx-a11y/anchor-is-valid */

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
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
import { Header, Button, Footer } from '../../components';

export function InfoTicket() {
  const purpleColor = '#7E52DE';
  return (
    <Container>
      <Header stylelight />
      <ContainerItem>
        <Image src={UndrawImg} />
      </ContainerItem>
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
            <WrapperIngress border column center>
              <Text spacer>
                <ShoppingCartOutlinedIcon
                  sx={{ color: '#7e5ede' }}
                  fontSize="large"
                />
                R$ 360,00
              </Text>
              <ContainerItem column>
                <Button fontlight>FINALIZAR PEDIDO</Button>
              </ContainerItem>
            </WrapperIngress>
          </ContainerItem>
        </div>
      </ContainerItem>
    </Container>
  );
}