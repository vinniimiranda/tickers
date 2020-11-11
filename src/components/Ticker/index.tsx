import React from 'react';
import { IndicatorInterface } from '../../App';

import { Container, TickerName, TickerLogo, TickerCode, Indicators } from './styles';

type TickerProps = {
  name: string;
  imageUrl: string;
  code: string;
  indicators: IndicatorInterface
}

const Ticker: React.FC<TickerProps> = ({ name, imageUrl, code, indicators }) => {
  return <Container>
    <TickerName>{name.toLowerCase()}</TickerName>
    <TickerLogo src={imageUrl} alt={`${name} Logo`} />
    <TickerCode>{code}</TickerCode>
    <Indicators>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>Preço</b></span>
        <span>R$ {indicators.price}</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>Variação</b></span>
        <span style={{
          color: indicators.variation >= 0 ? 'green' : 'red'
        }}>{indicators.variation}%</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>PL</b></span>
        <span>{indicators.pl}</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>PVP</b></span>
        <span>{indicators.pvp}</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>Dividendo</b></span>
        <span>{indicators.dy}%</span>
      </div>
    </Indicators>
  </Container>;
}

export default Ticker;
