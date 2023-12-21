import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  background: #15151a;
  display: flex;
  align-items: center;
`;

export const ContainerItem = styled.div`
  width: 400px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #18181e;
    padding: 40px 10px 40px 10px;
    border-radius: 8px;

    h1 {
      color: #ffff;
      margin-bottom: 15px;
    }
    div {
      width: 300px;
    }
  }
`;

export const Text = styled.h1`
  font-size: ${(props) => (props.size ? '60px' : '48px')};
  font-weight: ${(props) => (props.weigth ? '500' : '400')};
  color: #ffff;
  line-height: normal;
  margin-bottom: ${(props) => (props.spacer ? '30px' : 'none')};
`;

export const TicketImg = styled.img`
  margin-right: 20px;
`;

export const Input = styled.input`
  position: relative;
  border: none;
  width: 300px;
  height: 50px;
  border-radius: 8px;
  background: #15151a;
  color: #c8c3c1;
  padding-left: 15px;

  &::placeholder {
    color: #c8c3c1;
    opacity: 0.3;
  }

  &:focus {
    border: 1px solid #7e52de;
    background-color: #15151a;
  }
  &:active {
    background-color: #15151a;
  }
`;

export const P = styled.p`
  color: #c8c3c1;
  margin-top: 20px;
  font-weight: 300;
  text-align: ${(props) => (props.center ? 'center' : 'initial')};

  a {
    color: #7552de;
    text-decoration: none;
    margin-left: 10px;
  }

  a:hover {
    opacity: 0.5;
  }
`;

export const Info = styled.h2`
  color: #ffff;
  font-size: 40px;
  font-weight: 400;
`;

export const LoginBack = styled.p`
  color: #7e52de;
  display: flex;
  align-items: center;
  margin-top: 30px;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.2s ease-in-out;
  }

  a {
    color: #7552de;
    text-decoration: none;
    margin-left: 10px;
    font-weight: 800;
  }
`;

export const Error = styled.p`
  color: #ed4337;
  opacity: 0.7;
  margin: 5px;
`;
