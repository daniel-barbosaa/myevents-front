import Slider from 'infinite-react-carousel';
import { Container, Title, Image, ContainerItem, P, Carrousel } from './style';
import Fire from '../../assets/fire.svg';
import Event from '../../assets/banner-igreja.jpg';

export function AutomaticCarousel() {
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
    slidesToShow: 4,
  };

  return (
    <Container>
      <Title>
        EM DESTAQUE <img src={Fire} />
      </Title>
      <Slider {...settings}>
        {event.map((item) => (
          <ContainerItem>
            <Image src={Event} />
          </ContainerItem>
        ))}
      </Slider>
    </Container>
  );
}
