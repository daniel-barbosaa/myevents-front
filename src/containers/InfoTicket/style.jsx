import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #efefef;
`;

export const ContainerItem = styled.div`
  display: flex;
`;

export const Text = styled.h1`
  font-size: ${(props) => (props.desc ? '12px' : '25px')};
  font-weight: semi-bold;
  color: #000000;
  line-height: normal;
  margin-bottom: ${(props) => (props.spacer ? '30px' : 'none')};
`;

export const Image = styled.img`
  width: 200px;
`;

export const P = styled.p`
  width: 250px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 800;
  opacity: 0.6;
  margin-top: ${(props) => (props.spacetop ? '10px' : 'none')};
  margin-bottom: 10px;
`;

export const CardIngress = styled.div`
  background: #f44434;
  padding: 15px;
  display: flex;
  column-gap: 20px;
  border-radius: 8px;

  p {
    color: #ffffff;
    font-weight: 300;
  }

  a {
    display: block;
    margin-top: 10px;
    color: #ffffff;
  }
`;

export const CardIngressSelect = styled.div`
  background-color: #ffffff;
`;

export const ButtonAdd = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: #7e52de;
    padding: 5px;
    cursor: pointer;
    border-radius: 100%;
  }
  i:active {
    background: #7e52dea4;
  }

  i:hover {
    opacity: 0.8;
  }
`;
