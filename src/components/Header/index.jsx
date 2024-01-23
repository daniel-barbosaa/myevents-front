import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { useNavigate } from 'react-router-dom';
import Ticket from '../../assets/ticket-white.svg';
import { MenuNavigate } from '../MenuNavigate';

import {
  Container,
  H1,
  WrapperLogin,
  Text,
  WrapperRegister,
  ContainerItem,
  ImageTicket,
  TextLogin,
  AccountIcon,
} from './style';

export function Header({ stylelight, login = false, dark = false }) {
  const navigate = useNavigate();
  const purpleColor = '#7E52DE';

  return (
    <Container spacer="true" stylelight={stylelight}>
      {login ? (
        <H1>MyEvents</H1>
      ) : (
        <ContainerItem>
          {dark ? (
            <h1 style={{ color: '#15151A' }}>MyEvents</h1>
          ) : (
            <H1>MyEvents</H1>
          )}
        </ContainerItem>
      )}
      {login ? (
        <ContainerItem space="true">
          <WrapperLogin
            onClick={() => {
              navigate('/login');
            }}
          >
            <PersonOutlineOutlinedIcon
              style={{ color: '#7E52DE' }}
              fontSize="medium"
            />
            <TextLogin>ENTRAR</TextLogin>
          </WrapperLogin>
          <WrapperRegister
            onClick={() => {
              navigate('/registrar');
            }}
          >
            <Text>CRIAR CONTA</Text>
          </WrapperRegister>
        </ContainerItem>
      ) : (
        <ContainerItem space="true">
          <div>
            <AccountIcon sx={{ color: purpleColor }} fontSize="large" />
          </div>
          {dark ? (
            <MenuNavigate stylelight="true" dark="true" />
          ) : (
            <MenuNavigate stylelight="true" />
          )}
        </ContainerItem>
      )}
    </Container>
  );
}
