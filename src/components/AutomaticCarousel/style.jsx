import styled from 'styled-components';
import Slider from 'infinite-react-carousel';

export const Carrousel = styled(Slider)``;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: ${(props) => (props.spacer ? '30px' : 'none')};
  padding: 1em;
`;

export const Title = styled.p`
  color: #ffffff;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 30px;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  gap: 10px;
`;

export const Wrape = styled.div`
  display: flex;
  gap: 3em;
  margin: 0px 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;

  @media (max-width: 480px) {
    height: 100%;
    margin: 0px 10px;
  }
`;

export const WrapperLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
