import { useState, useEffect } from 'react';

import {
  Container,
  Title,
  Image,
  ContainerItem,
  P,
  Carrousel,
  Wrape,
  Info,
  WrapperLoader,
} from './style';
import apiEventsSympla from '../../services/api';
import Fire from '../../assets/fire.svg';
import { Loader } from '../loader';

export function AutomaticCarousel() {
  const [isLoader, setIsLoader] = useState(false);
  const [events, setEvents] = useState([]);
  const [isSlider, setisSlider] = useState(false);
  useEffect(() => {
    async function loadEvents() {
      try {
        setIsLoader(true);
        setTimeout(async () => {
          const { data } = await apiEventsSympla.get('');
          setIsLoader(false);
          setEvents(data.data);
        }, 1000);
        setisSlider(true);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    }
    loadEvents();
  }, []);
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
      {isLoader ? (
        <WrapperLoader>
          <Loader />
        </WrapperLoader>
      ) : (
        isSlider && (
          <Carrousel {...settings}>
            {events.map((item) => (
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
        )
      )}
    </Container>
  );
}
