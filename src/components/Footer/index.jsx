import CircumIcon from '@klarr-agency/circum-icons-react';
import { Container, ContainerItem, P, Image, WraperIcon, Line } from './style';
import Ticket from '../../assets/Ticket.svg';

export function Footer() {
  const socialIcons = ['facebook', 'twitter', 'instagram', 'linkedin'];

  return (
    <Container spacer="true">
      <ContainerItem>
        <Image src={Ticket} />
        <WraperIcon>
          {socialIcons.map((icon) => (
            <i key={icon}>
              <CircumIcon name={icon} size="30px" />
            </i>
          ))}
        </WraperIcon>
      </ContainerItem>
      <ContainerItem column="true">
        <Line />
        <P>MyEvents Soluções © Copyright 2023 </P>
      </ContainerItem>
    </Container>
  );
}
