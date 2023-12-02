import styled from 'styled-components';
import Slider from 'infinite-react-carousel';

export const Carrousel = styled(Slider)``;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: ${(props) => (props.spacer ? '30px' : 'none')};
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
  cursor: pointer;
  padding: 20px;
`;

export const Wrape = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 4px 26px 0px rgba(0, 0, 0, 0.31);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 30px;
`;

export const Image = styled.img`
  width: 50%;
  border-radius: 20px 0px 0px 20px;
`;

export const P = styled.p`
  color: ${(props) => (props.purple ? '#7E52DE' : '#C8C3C1')};
  opacity: 0.8;

  i {
    padding: 0px 5px;
    color: #797474;
    margin: 4px 0px 4px 0px;
  }
`;
