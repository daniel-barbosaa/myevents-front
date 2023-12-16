import { useState, useEffect } from 'react';
import { Container, Title, Image, ContainerItem, P, Carrousel } from './style';
import Remind from '../../assets/Remind.svg';
import apiEventsSympla from '../../services/api';

export function CheckOutCarousel() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      try {
        const { data } = await apiEventsSympla.get('');
        // Atualizar a data no formato DD apenas para exibição
        setEvents(data.data);
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
        CONFIRA <img src={Remind} />
      </Title>
      <ContainerItem>
        <Carrousel
          itemsToShow={5}
          breakPoints={breakPoints}
          style={{ width: '100%' }}
        >
          {events.map((item) => (
            <ContainerItem column spacer pointer>
              <Image src={item.image} alt="" />
              <ContainerItem column spacer>
                <P small style={{ fontWeight: 'normal ' }}>
                  {item.name}
                </P>
                <P small style={{ opacity: '0.8' }}>
                  Ingressos disponiveis
                </P>
              </ContainerItem>
            </ContainerItem>
          ))}
        </Carrousel>
      </ContainerItem>
    </Container>
  );
}
