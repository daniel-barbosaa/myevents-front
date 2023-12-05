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
  font-size: 20px;
  font-weight: semi-bold;
  color: #000000;
  line-height: normal;
  margin-bottom: ${(props) => (props.spacer ? '30px' : 'none')};
`;

export const Image = styled.img`
  width: 200px;
`;

export const P = styled.p`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 800;
  opacity: 0.6;
  margin-bottom: 10px;
`;
