/* eslint-disable jsx-a11y/anchor-is-valid */
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {
  Container,
  Text,
  ContainerItem,
  P,
  Title,
  Input,
  WrapperIngress,
  Label,
  PaymentWrapper,
} from './style';

import { Header, Button, Footer } from '../../components';

export function PaymentForm() {
  const purpleColor = '#7E52DE';

  return (
    <Container>
      <Header stylelight />
      <ContainerItem gap align>
        <ContainerItem column background shadow spacetop>
          <WrapperIngress column>
            {' '}
            <Text spacer>SUNSET-NIGHT</Text>
            <P>
              <CalendarTodayOutlinedIcon
                sx={{ color: purpleColor }}
                fontSize="small"
              />{' '}
              09 de janeiro de 2023, 17:00
            </P>
            <P spacetop>
              <LocationOnOutlinedIcon
                sx={{ color: purpleColor }}
                fontSize="small"
              />{' '}
              Avenida lafetá celestino 433 - Villa Ipiranga Montes claros -
              Minas Gerais
            </P>
          </WrapperIngress>
          <WrapperIngress column>
            <Text border padding spacer>
              Resumo da compra
            </Text>
            <P spacetop>SUNSET - NIGHT</P>
          </WrapperIngress>
          <WrapperIngress column>
            <Title bold>
              1x Ingresso <i>R$120,00</i>
            </Title>
            <Title bold>
              Taxa <i>R$12,00</i>
            </Title>
            <Title bold>
              Estacionamento <i>15,00</i>
            </Title>
          </WrapperIngress>
          <WrapperIngress column bordernone>
            <Title bold>
              TOTAL{' '}
              <i
                style={{
                  opacity: '1',
                  fontSize: '20px',
                  color: '#7E52DE',
                  fontWeight: 'bold',
                }}
              >
                R$120,00
              </i>
            </Title>
          </WrapperIngress>
        </ContainerItem>

        
        <PaymentWrapper width padding>
          <Title bold>FORMA DE PAGAMENENTO</Title>
          <form action="">
            <Label>Nome do titular</Label>
            <Input type="text" placeholder="Nome" />
            <Label>Número do cartão</Label>
            <Input type="text" placeholder="Número" />
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ width: '50%' }}>
                <Label>Vencimento</Label>
                <Input type="month" placeholder="Nome" />
              </div>
              <div>
                <Label>CVV</Label>
                <Input type="text" placeholder="123" />
              </div>
            </div>
          </form>

          <Button>Confirmar</Button>
        </PaymentWrapper>
      </ContainerItem>
    </Container>
  );
}
