import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Title,
  Image,
  ContainerItem,
  P,
  Carrousel,
  Wrape,
  Info,
} from './style';
import apiEventsSympla from '../../services/api';

import Fire from '../../assets/fire.svg';
import Event from '../../assets/social-event.jpg';

export function AutomaticCarousel() {
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   async function loadEvents() {
  //     try {
  //       const { data } = await apiEventsSympla.get('');
  //       console.log(data); // Adicione este log
  //       setEvents(data);
  //     } catch (error) {
  //       console.error('Erro ao buscar eventos:', error);
  //     }
  //   }
  //   loadEvents();
  // }, []);

  // console.log(events);

  const event = [
    {
      label: 'Block 1',
    },
    {
      label: 'Block 2',
    },
    {
      label: 'Block 3',
    },
    {
      label: 'Block 4',
    },
    {
      label: 'Block 5',
    },
    {
      label: 'Block 6',
    },
  ];

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    wheel: true,
  };

  return (
    <Container>
      <Title>
        EVENTOS EM DESTAQUE <img src={Fire} />
      </Title>
      <Carrousel {...settings}>
        {event.map((item) => (
          <ContainerItem key={item.id}>
            <Wrape>
              <Image src={item.image} />
              <Info>
                <P purple style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Não perca!
                </P>
                <P style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Não fique de fora!
                </P>
                <P purple style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Venha e participe!
                </P>
                <P style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  DIA: 20 <i>/</i> 07
                </P>
              </Info>
            </Wrape>
          </ContainerItem>
        ))}
      </Carrousel>
    </Container>
  );
}
