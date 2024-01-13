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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 3em;
    height: 100vh;
    padding: 2em;
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 3em;
    padding: 2em;
    height: 100vh;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 1em;
  }
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column-reverse;
    height: 100vh;
    padding: 0.5em;
  }
`;

export const ContainerItem = styled.div`
  width: 400px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 1em;
  }
`;

export const Form = styled.form`
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

  @media (max-width: 390px) {
    h1 {
      font-size: 20px;
    }
    div{
      
    }
  }
`;

export const Text = styled.h1`
  font-size: ${(props) => (props.size ? '60px' : '48px')};
  font-weight: ${(props) => (props.weigth ? '500' : '400')};
  color: #ffff;
  line-height: normal;
  margin-bottom: ${(props) => (props.spacer ? '30px' : 'none')};

  @media (max-width: 480px) {
    font-size: 30px;
    margin-bottom: 0px;
  }
  @media (max-width: 390px) {
    font-size: 25px;
  }
`;

export const TicketImg = styled.img`
  margin-right: 20px;

  @media (max-width: 480px) {
    width: 30px;
  }
  @media (max-width: 390px) {
    display: none;
  }
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

  @media (max-width: 390px) {
    width: 300px;
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

  @media (max-width: 480px) {
    margin-top: 0px;
  }
`;

export const Info = styled.h2`
  color: #ffff;
  font-size: 40px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 20px;
  }
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

  @media (max-width: 480px) {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  @media (max-width: 390px) {
  }
`;

export const Error = styled.p`
  color: #ed4337;
  opacity: 0.7;
  margin: 5px;
`;
