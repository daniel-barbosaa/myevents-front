import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
} from './style';

export function Header({ spacer, login = false, dark = false }) {
  const navigate = useNavigate();
  const purpleColor = '#7E52DE';
  return (
    <Container spacer="true" stylelight="true">
      {login ? (
        <H1>MyEvents</H1>
      ) : (
        <ContainerItem>
          {dark ? (
            <h1 style={{ color: '#15151A' }}>MyEvents</h1>
          ) : (
            <H1>MyEvents</H1>
          )}
          <img src={Ticket} style={{ width: '50px' }} />
        </ContainerItem>
      )}
      {login ? (
        <ContainerItem>
          <WrapperLogin
            onClick={() => {
              navigate('/login');
            }}
          >
            <PersonOutlineOutlinedIcon
              style={{ color: '#7E52DE' }}
              fontSize="medium"
            />
            <Text>ENTRAR</Text>
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
            <AccountCircleIcon sx={{ color: purpleColor }} fontSize="large" />
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
