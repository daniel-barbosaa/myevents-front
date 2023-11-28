import { Container, Title, Image, ContainerItem, P, Carrousel } from './style';
import Olho from '../../assets/olho.svg';
import Event from '../../assets/social-event.jpg';

export function MoreSeenCarousel() {
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
          {event.map((item) => (
            <ContainerItem column spacer pointer>
              <Image src={Event} alt="" />
              <ContainerItem column spacer>
                <P purple small style={{ fontWeight: 'bold' }}>
                  4 JAN <i>{'>'}</i> 25 JAN
                </P>
                <P>CONFERÊNCIA SATIFICAÇÃO</P>
                <P small light>
                  IGREJA RED - INDAIATUBA, SP
                </P>
              </ContainerItem>
            </ContainerItem>
          ))}
        </Carrousel>
      </ContainerItem>
    </Container>
  );
}
