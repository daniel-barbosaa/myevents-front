import { useState, useEffect } from 'react';
import {
  Container,
  Title,
  Image,
  Carrousel,
  Wrape,
  WrapperLoader,
  ContainerItem,
} from './style';
import apiEventsSympla from '../../services/api';
import Fire from '../../assets/fire.svg';
import { ClipLoader } from 'react-spinners';

export function AutomaticCarousel() {
  const [isLoader, setIsLoader] = useState(false);
  const [events, setEvents] = useState([]);
  const [isSlider, setisSlider] = useState(false);
  useEffect(() => {
    async function loadEvents() {
      try {
        setIsLoader(true);
        const { data } = await apiEventsSympla.get('');
        setIsLoader(false);
        setEvents(data.data);
        setisSlider(true);
      } catch (error) {
        throw new Error(error);
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
    centerMode: true,
    centerPadding: 50,
  };
  return (
    <Container>
      <Title>
        EVENTOS EM DESTAQUE <img src={Fire} />
      </Title>
      {isLoader ? (
        <WrapperLoader>
          <ClipLoader color="#ffffff" />
        </WrapperLoader>
      ) : (
        isSlider && (
          <Carrousel {...settings}>
            {events.map((item) => (
              <ContainerItem key={item.id}>
                <Wrape>
                  <Image src={item.image} />
                </Wrape>
              </ContainerItem>
            ))}
          </Carrousel>
        )
      )}
    </Container>
  );
}
