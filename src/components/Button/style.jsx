import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: ${(props) => (props.small ? '100px' : '300px')};
  height: 50px;
  background: #7e52de;
  font-weight: ${(props) => (props.fontlight ? '200' : '700')};
  font-size: 20px;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  border: none;
  margin-top: ${(props) => (props.spacetop ? '20px' : 'none')};

  &:active {
    background: #7e52dea4;
  }

  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }

  @media (max-width: 280px) {
    width: 200px;
  }
`;
