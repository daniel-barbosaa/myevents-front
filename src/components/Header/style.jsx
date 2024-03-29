import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.spacer ? '50px' : 'none')};
  box-shadow: ${(props) =>
    props.stylelight ? '0px 0.1px 6px 0px #00000018' : 'none'};
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: ${(props) => (props.stylelight ? '#ffffff' : '#15151a')};
  width: 100%;
`;

export const H1 = styled.h1`
  color: ${(props) => (props.dark ? '#15151A' : '#f1f1f1')};
  @media (max-width: 280px) {
    font-size: 20px;
  }
`;

export const WrapperLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #252525;
    transition: 0.2s ease-in-out;
  }
`;

export const Text = styled.p`
  color: ${(props) => (props.dark ? '#15151A' : '#f1f1f1')};
  font-weight: 600;
  font-size: 14px;
`;

export const WrapperRegister = styled.div`
  border: 1px solid #7e52de;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #7e52de;
    transition: 0.2s ease-in-out;
  }

  @media (max-width: 480px) {
    width: 8em;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.space ? '5px' : '20px')};
`;

export const ImageTicket = styled.img`
  width: 50px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const TextLogin = styled.p`
  color: ${(props) => (props.dark ? '#15151A' : '#f1f1f1')};
  font-weight: 600;
  font-size: 14px;

  @media (max-width: 480px) {
    display: none;
  }
`;
export const AccountIcon = styled(AccountCircleIcon)``;
