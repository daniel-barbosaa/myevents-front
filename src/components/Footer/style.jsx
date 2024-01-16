import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.spacer ? '200px' : 'none')};
`;

export const Line = styled.div`
  opacity: 0.3;
  height: 1px;
  background: #c8c3c12b;
  width: 100%;
`;

export const WraperIcon = styled.div`
  i {
    color: #c8c3c1;
    cursor: pointer;
    opacity: 0.5;
    margin-left: 10px;
  }

  i:hover {
    transition: 0.3s ease;
    color: #ffffff;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'none')};
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 20px 20px;
`;

export const Image = styled.img`
  width: 3em;

`;

export const P = styled.p`
  margin-top: 30px;
  color: #ffffff;
  opacity: 0.2;
`;
