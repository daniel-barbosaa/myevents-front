import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  ContainerItem,
  P,
  WrapperLoader,
  Button,
} from './style';

import { useUser } from '../../hooks/UserContext';
import { Loader } from '../Loader';

export function NoTickets() {
  const navigate = useNavigate();
  const { userData } = useUser();
  const [isLoader, setIsLoader] = useState(true);

  setInterval(() => {
    setIsLoader(false);
  }, 2000);

  return (
    <Container>
      {isLoader ? (
        <WrapperLoader>
          <Loader color="#ffffff" />
        </WrapperLoader>
      ) : (
        <ContainerItem>
          <Title>Não há ingressos para próximos eventos</Title>
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            Encontar eventos
          </Button>
        </ContainerItem>
      )}
    </Container>
  );
}
