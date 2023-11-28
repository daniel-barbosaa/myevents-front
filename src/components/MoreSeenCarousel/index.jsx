import Carousel from 'react-elastic-carousel';
import { Container, Text } from './style';
import Olho from '../../assets/olho.svg';

export function MoreSeenCarousel({ ...props }) {
  const events = [{}];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

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

  return (
    <Container {...props}>
      <Text>
        EVENTOS MAIS VISTOS <img src={Olho} />
      </Text>
      <Carousel
        itemsToShow={5}
        breakPoints={breakPoints}
        style={{ width: '95%' }}
      >
        {event.map((item) => (
          <div>{item.label}</div>
        ))}
      </Carousel>
    </Container>
  );
}
