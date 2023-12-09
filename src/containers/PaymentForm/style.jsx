import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #efefef;
`;

export const ContainerItem = styled.div`
  display: flex;
  gap: ${(props) => (props.gap ? '100px' : '0px')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: center;
  margin-top: ${(props) => (props.spacetop ? '30px' : '0px')};
  border-radius: 10px;
  background: ${(props) => (props.background ? '#ffffff' : 'none')};
  box-shadow: ${(props) =>
    props.shadow ? '1px 3px 10px -2px rgba(0,0,0,0.58)' : 'none'};
  margin-bottom: 50px;
`;

export const Text = styled.h1`
  display: flex;
  margin-bottom: 10px;
  font-size: 20px;
  width: 150px;
  border-left: ${(props) => (props.border ? '3px solid #7e5ede' : 'none')};
  padding-left: ${(props) => (props.padding ? '10px' : 'none')};
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
`;

export const CardIngress = styled.div``;

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

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.bold ? '500' : '300')};
  margin-bottom: 8px;

  i {
    font-weight: normal;
    font-size: 15px;
    opacity: 0.7;
  }
`;

export const InputDescount = styled.input`
  border: 1px solid #c8c3c1;
  padding: 10px;
  border-radius: 8px;
  color: #8a827f;

  &:focus {
    border: 1px solid #7e52de;
  }
`;

export const WrapperIngress = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'none')};
  justify-content: center;
  align-items: ${(props) => (props.center ? 'center' : 'none')};
  padding: 20px;
  column-gap: 30px;
  border-bottom: ${(props) =>
    props.bordernone ? 'none' : '1px solid #C8C3C1'};
`;

export const Value = styled.i`
  color: #7e5ede;
`;
