import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: #15151a;
  align-items: center;
  padding: 2em;
  min-height: 100vh;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3em;

    padding: 2em;
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3em;
    padding: 2em;
  }
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    padding: 0.5em;
  }
`;

export const ContainerItem = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  @media (max-width: 390px) {
    width: 300px;
  }

  @media (max-width: 280px) {
    width: 200px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #18181e;
  padding: 50px 20px 50px 20px;
  border-radius: 8px;

  @media (max-width: 280px) {
    display: flex;
    width: 280px;
    padding: 20px;
  }
`;

export const WrapperLogin = styled.div`
  width: 400px;
  @media (max-width: 480px) {
    width: 300px;
    font-size: 40px;
  }

  @media (max-width: 280px) {
    width: 200px;
    font-size: 40px;
  }
`;

export const Text = styled.h1`
  font-size: ${(props) => (props.size ? '60px' : '48px')};
  font-weight: ${(props) => (props.weigth ? '500' : '400')};
  color: #ffff;
  line-height: normal;
  margin-bottom: ${(props) => (props.spacer ? '30px' : 'none')};

  @media (max-width: 991px) {
    font-size: 40px;
  }
  @media (max-width: 480px) {
    font-size: 40px;
  }

  @media (max-width: 380px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const TicketImg = styled.img`
  margin-right: 20px;

  @media (max-width: 380px) {
    width: 50px;
  }
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

  @media (max-width: 280px) {
    width: 200px;
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
