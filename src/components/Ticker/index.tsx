import React from 'react';
import { IndicatorInterface } from '../../App';
import Stacked from '../Charts/Lines/Stacked';

import { Container, TickerName, TickerLogo, TickerCode, Indicators } from './styles';

type TickerProps = {
  name: string;
  imageUrl: string;
  code: string;
  indicators: IndicatorInterface[]
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
        <span>R$ {indicators[0].price}</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>Variação</b></span>
        <span style={{
          color: indicators[0].variation >= 0 ? 'green' : 'red'
        }}>{indicators[0].variation}%</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>PL</b></span>
        <span>{indicators[0].pl}</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>PVP</b></span>
        <span>{indicators[0].pvp}</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>Dividendo</b></span>
        <span>{indicators[0].dy}%</span>
      </div>
    </Indicators>

    <Stacked data={indicators.sort((a,b) => a.createdAt > b.createdAt ? 1 : -1)} />
  </Container>;
}

export default Ticker;
