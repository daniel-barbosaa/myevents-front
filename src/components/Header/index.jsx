import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {
  Container,
  H1,
  WrapperLogin,
  Text,
  WrapperRegister,
  ContainerItem,
} from './style';

export function Header({ spacer, login = false }) {
  return (
    <Container spacer>
      <H1>MyEvents</H1>
      {login ? (
        <ContainerItem>
          <WrapperLogin>
            <PersonOutlineOutlinedIcon
              style={{ color: '#7E52DE' }}
              fontSize="medium"
            />
            <Text>ENTRAR</Text>
          </WrapperLogin>
          <WrapperRegister>
            <Text>CRIAR CONTA</Text>
          </WrapperRegister>
        </ContainerItem>
      ) : (
        <h1>teste</h1>
      )}
    </Container>
  );
}
