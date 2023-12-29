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
    <Container spacer stylelight>
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
          <WrapperLogin>
            <PersonOutlineOutlinedIcon
              style={{ color: '#7E52DE' }}
              fontSize="medium"
            />
            <Text
              onClick={() => {
                navigate('/login');
              }}
            >
              ENTRAR
            </Text>
          </WrapperLogin>
          <WrapperRegister>
            <Text>CRIAR CONTA</Text>
          </WrapperRegister>
        </ContainerItem>
      ) : (
        <ContainerItem space>
          <div>
            <AccountCircleIcon sx={{ color: purpleColor }} fontSize="large" />
          </div>
          {dark ? (
            <MenuNavigate stylelight dark />
          ) : (
            <MenuNavigate stylelight />
          )}
        </ContainerItem>
      )}
    </Container>
  );
}
