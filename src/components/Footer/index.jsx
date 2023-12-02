import CircumIcon from '@klarr-agency/circum-icons-react';
import {
  Container,
  Title,
  ContainerItem,
  P,
  Image,
  WraperIcon,
  Line,
} from './style';
import Ticket from '../../assets/Ticket.svg';

export function Footer() {
  const socialIcons = ['facebook', 'twitter', 'instagram', 'linkedin'];

  return (
    <Container spacer>
      <ContainerItem>
        <Image src={Ticket} />
        <WraperIcon>
          {socialIcons.map((icon) => (
            <i>
              <CircumIcon name={icon} size="40px" />
            </i>
          ))}
        </WraperIcon>
      </ContainerItem>
      <ContainerItem column>
        <Line />
        <P>MyEvents Soluções © Copyright 2023 </P>
      </ContainerItem>
    </Container>
  );
}
