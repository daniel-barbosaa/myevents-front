import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

export const Title = styled.p`
  color: #1e1e1e;
  font-weight: 600;
  font-size: 20px;
`;

export const ContainerItem = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  font-size: 15px;
  font-weight: 400;

  i {
    font-weight: bold;
    font-size: 17px;
  }
`;
