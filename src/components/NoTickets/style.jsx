import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.p`
  color: #e1e1e1;
  font-weight: 600;
  font-size: 15px;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const P = styled.p`
  font-size: 15px;
  font-weight: 400;

  i {
    font-weight: bold;
    font-size: 17px;
  }
`;

export const WrapperLoader = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  font-weight: 500;
  background: #7e52de;
  font-size: 15px;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  border: none;
  &:active {
    background: #7e52dea4;
  }

  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;
