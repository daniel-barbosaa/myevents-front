import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #15151a;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;
  margin-top: 140px;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: #7552de;
`;

export const EventName = styled.h3`
  color: #ffffff;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: ${(props) => (props.large ? '12px' : '10px')};
  font-weight: 300;
  column-gap: 5px;
  margin-bottom: ${(props) => (props.bottom ? '10px' : '0')};
`;

export const Ticket = styled.div`
  width: 300px;
  border-radius: 8px;
  background: linear-gradient(
    39deg,
    rgba(164, 185, 218, 1) 0%,
    rgba(145, 142, 254, 1) 45%,
    rgba(142, 143, 250, 1) 45%,
    rgba(100, 57, 255, 1) 100%
  );

  @media (max-width: 280px) {
    width: 250px;
  }
`;

export const FooterTicket = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #4d4179;
  padding: 10px;
  border-radius: 0px 0px 8px 8px;
`;
