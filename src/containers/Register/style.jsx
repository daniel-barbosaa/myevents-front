import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: #15151a;
  overflow-y: auto;
  min-height: 100vh;
  padding: 1em 0em 1em 0em;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    gap: 3em;
    padding-top: 1em;
  }

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }

  @media (max-width: 480px) {
    padding-top: 3em;
  }
`;

export const ContainerItem = styled.div`
  width: 400px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 350px;
  }

  @media (max-width: 280px) {
    width: 250px;
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
  box-sizing: border-box;

  h1 {
    color: #ffff;
    margin-bottom: 15px;
  }

  @media (max-width: 390px) {
    h1 {
      font-size: 20px;
    }
    div {
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
    font-size: 2em;
    margin-bottom: 0px;
  }
  @media (max-width: 390px) {
    font-size: 25px;
  }
`;

export const TicketImg = styled.img`
  margin-right: 20px;

  @media (max-width: 480px) {
    width: 1em;
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

  @media (max-width: 280px) {
    width: 200px;
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
`;

export const Error = styled.p`
  color: #ed4337;
  opacity: 0.7;
  margin: 5px;
`;
