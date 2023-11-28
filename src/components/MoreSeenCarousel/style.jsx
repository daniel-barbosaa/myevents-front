import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: ${(props) => (props.spacer ? '30px' : 'none')};
`;

export const Text = styled.p`
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
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
