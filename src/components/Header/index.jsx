import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {
  Container,
  H1,
  WrapperLogin,
  Text,
  WrapperRegister,
  ContainerItem,
} from './style';

export function Header({ ...props }) {
  return (
    <Container {...props}>
      <H1>MyEvents</H1>
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
    </Container>
  );
}
