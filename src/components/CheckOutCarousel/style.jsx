import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: ${(props) => (props.spacer ? '30px' : 'none')};
  padding: 1em;
`;

export const Carrousel = styled(Carousel)`
  .sc-kstpWv {
    background: transparent;
  }

  .jfzbvv {
    color: #7e52de;
    box-shadow: none;
  }

  .hQICvF {
    color: #7e52de;
    box-shadow: none;
  }
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
  flex-direction: ${(props) => (props.column ? 'column' : 'none')};
  gap: ${(props) => (props.spacer ? '10px' : '0px')};
  cursor: ${(props) => (props.pointer ? 'pointer' : 'none')};
`;

export const Image = styled.img`
  width: 220px;
  border-radius: 8px;
`;

export const P = styled.p`
  color: ${(props) => (props.purple ? '#7E52DE' : '#ffff')};
  font-size: ${(props) => (props.small ? '12px' : '16px')};
  font-weight: ${(props) => (props.light ? '200' : '400')};

  i {
    padding: 0px 5px;
    color: #797474;
    margin: 4px 0px 4px 0px;
  }
`;
export const WrapperLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;
