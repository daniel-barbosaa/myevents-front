import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { Container, Title, ContainerItem, P } from './style';
import { Button } from '../Button';
import { useUser } from '../../hooks/UserContext';

export function NoTickets() {
  const { userData } = useUser();

  return (
    <Container>
      <h1>sem ingresso</h1>
    </Container>
  );
}
