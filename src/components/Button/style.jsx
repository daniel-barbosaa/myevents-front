import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 300px;
  height: 50px;
  background: #7e52de;
  font-weight: 700;
  font-size: 20px;
  border-radius: 8px;
  color: #c8c3c1;
  cursor: pointer;
  border: none;
  margin-top: ${(props) => (props.spacetop ? '20px' : 'none')};

  &:hover{
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;
