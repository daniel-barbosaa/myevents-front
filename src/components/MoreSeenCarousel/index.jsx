import { useState, useEffect } from 'react';
import moment from 'moment';

import apiEventsSympla from '../../services/api';
import {
  Container,
  Title,
  Image,
  ContainerItem,
  P,
  Carrousel,
  WrapperLoader,
} from './style';
import Olho from '../../assets/olho.svg';
import { Loader } from '../Loader';

export function MoreSeenCarousel() {
  const [events, setEvents] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    async function loadEvents() {
      try {
        setIsLoader(true);
        setTimeout(async () => {
          const { data } = await apiEventsSympla.get('');
          const updatedEvents = data.data.map((event) => ({
            ...event,
            start_date: moment(event.start_date).format('DD'),
            end_date: moment(event.start_date).format('DD'),
          }));
          setIsLoader(false);
          setEvents(updatedEvents);
        }, 2000);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
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
        EVENTOS MAIS VISTOS <img src={Olho} />
      </Title>
      <ContainerItem>
        <Carrousel
          itemsToShow={5}
          breakPoints={breakPoints}
          style={{ width: '100%' }}
        >
          {isLoader ? (
            <WrapperLoader>
              <Loader />
            </WrapperLoader>
          ) : (
            events &&
            events.map((item) => (
              <ContainerItem column spacer pointer key={item.id}>
                <Image src={item.image} alt="" />
                <ContainerItem column spacer>
                  <P purple small style={{ fontWeight: 'bold' }}>
                    {item.start_date} JAN <i>{'>'}</i> {item.end_date} JAN
                  </P>
                  <P>{item.name}</P>
                  <P small light>
                    {item.address.name} - {item.address.state}
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
