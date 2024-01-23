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
  column-gap: 10px;
  align-items: center;
  font-size: ${(props) => (props.desc ? '12px' : '25px')};
  font-weight: semi-bold;
  color: #000000;
  line-height: normal;
  margin-bottom: ${(props) => (props.spacer ? '30px' : 'none')};
`;

export const Image = styled.img`
  width: 200px;
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
  margin-bottom: 10px;

  @media (max-width: 280px) {
    width: 200px;
  }
`;

export const CardIngress = styled.div`
  background: #f44434;
  padding: 15px;
  display: flex;
  column-gap: 20px;
  border-radius: 8px;

  p {
    color: #ffffff;
    font-weight: 300;
  }

  a {
    display: block;
    margin-top: 10px;
    color: #ffffff;
  }

  @media (max-width: 480px) {
    column-gap: 10px;
  }
`;

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
  width: 200px;
  font-weight: ${(props) => (props.bold ? '500' : '300')};
  margin-bottom: 5px;
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
    props.bordernone ? 'none' : '1px dashed #C8C3C1'};

  @media (max-width: 480px) {
    column-gap: 15px;
  }

  @media (max-width: 280px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Checked = styled.input`
  border: 20px;
`;

export const WrapperInfoAndAdd = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 3em;

  @media (max-width: 1030px) {
    gap: 3em;
  }
  @media (max-width: 820px) {
    gap: 3em;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 60px;
  }
`;

export const ContainerGrid = styled.div`
  width: 400px;

  @media (max-width: 280px) {
    width: 250px;
  }
`;

export const AddDiscount = styled.div`
  display: flex;
  gap: 70px;

  @media (max-width: 280px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Info = styled.div`
  @media (max-width: 280px) {
    width: 200px;
  }
`;
