import styled from 'styled-components';
import { Calendar } from 'primereact/calendar';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #15151a;
`;

export const ContainerItem = styled.div`
  display: flex;
  gap: ${(props) => (props.gap ? '100px' : '0px')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: ${(props) => (props.align ? 'center' : 'none')};
  justify-content: center;
  margin-top: ${(props) => (props.spacetop ? '30px' : '0px')};
  border-radius: 10px;
  background: ${(props) => (props.background ? '#ffffff' : 'none')};
  box-shadow: ${(props) =>
    props.shadow ? '1px 3px 10px -2px rgba(0,0,0,0.58)' : 'none'};
  margin-bottom: 50px;
`;
