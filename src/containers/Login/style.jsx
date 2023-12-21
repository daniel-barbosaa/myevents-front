import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  background: #15151a;
  align-items: center;
`;

export const ContainerItem = styled.div`
  width: 400px;
  display: flex;

  form {
    display: flex;
    flex-direction: column;
    background: #18181e;
    padding: 60px 20px 60px 20px;
    border-radius: 8px;
    div {
      background: #c8c3c1;
      width: 300px;
      height: 1px;
      margin-top: 30px;
      opacity: 0.2;
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
  border: none;
  width: 300px;
  height: 50px;
  border-radius: 8px;
  background: #15151a;
  color: #c8c3c1;
  padding-left: 15px;
  gap: 10px;

  &::placeholder {
    color: #c8c3c1;
    opacity: 0.3;
  }

  &:focus {
    border: 1px solid #7e52de;
    background: #15151a;
  }
`;

export const P = styled.p`
  text-align: center;
  color: #c8c3c1;
  margin-top: 40px;
  font-weight: 300;

  a {
    color: #7552de;
    text-decoration: none;
    margin-left: 10px;
  }

  a:hover {
    opacity: 0.5;
  }
`;

export const Error = styled.p`
  color: #ed4337;
  opacity: 0.7;
  margin: 5px;
`;
