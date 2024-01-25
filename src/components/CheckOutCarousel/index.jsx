import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import {
  Container,
  Title,
  Image,
  ContainerItem,
  P,
  Carrousel,
  WrapperLoader,
} from './style';
import Remind from '../../assets/Remind.svg';
import apiEventsSympla from '../../services/api';
import { Loader } from '../Loader';
import { useCart } from '../../hooks/TicketContext';

export function CheckOutCarousel() {
  const { putOrderTicket } = useCart();
  const priceRandom = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const handleItemClick = (item) => {
    navigate('/informacao-evento');
    putOrderTicket(item);
  };

  useEffect(() => {
    async function loadEvents() {
      try {
        setIsLoader(true);

        const { data } = await apiEventsSympla.get('');
        const updatedEvents = data.data.map((event) => ({
          ...event,
          date_start: moment(event.start_date).format('DD'),
          date_end: moment(event.start_date).format('DD'),
          price: priceRandom,
        }));
        const shuffledEvents = [...updatedEvents].sort(
          () => Math.random() - 0.5,
        );
        setIsLoader(false);
        setEvents(shuffledEvents);
      } catch (error) {
        console.error('Erro ao buscar ingressos:', error);
      }
    }
    loadEvents();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

  return (
    <Container>
      <Title>
        CONFIRA <img src={Remind} />
      </Title>
      <ContainerItem>
        <Carrousel
          itemsToShow={5}
          breakPoints={breakPoints}
          style={{ width: '100%' }}
        >
          {isLoader ? (
            <WrapperLoader>
              <Loader color="#ffffff" />
            </WrapperLoader>
          ) : (
            events.map((item) => (
              <ContainerItem
                column="true"
                spacer="true"
                pointer="true"
                key={item.id}
                onClick={() => {
                  handleItemClick(item);
                }}
              >
                <Image src={item.image} alt="" />
                <ContainerItem column="true" spacer="true">
                  <P small="true" style={{ fontWeight: 'normal ' }}>
                    {item.name}
                  </P>
                  <P small="true" style={{ opacity: '0.8' }}>
                    Ingressos disponiveis
                  </P>
                </ContainerItem>
              </ContainerItem>
            ))
          )}
        </Carrousel>
      </ContainerItem>
    </Container>
  );
}
