import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { useNavigate } from 'react-router-dom';
import { Container, Title, ContainerItem, P } from './style';
import { Button } from '../Button';

export function RegistrationConfirmed() {
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerItem>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          <Title>Sua inscrição foi confimada!</Title>
          <TaskAltOutlinedIcon sx={{ color: '#22bb33', fontSize: '150px' }} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '30px',
          }}
        >
          <P>
            Pedido: <i>23332342</i>
          </P>
          <P style={{ marginTop: '10px', marginBottom: '30px' }}>
            Por: <i>MyEvents vendas online</i>
          </P>
          <Button
            onClick={() => {
              navigate('/meus-ingressos');
            }}
          >
            Meus ingresso
          </Button>
        </div>
      </ContainerItem>
    </Container>
  );
}
