import React from 'react';
import { TickerInterface } from '../../App';
import Stacked from '../Charts/Lines/Stacked';

import { Container, TickerName, TickerLogo, TickerCode, Indicators } from './styles';

const Ticker: React.FC<TickerInterface> = ({ ...props }) => {
  
  let chartPrices = [...props?.prices]
  chartPrices = chartPrices.sort((a,b) => a.createdAt > b.createdAt ? 1 : -1)
  
  return <Container>
    <TickerName>{props.name.toLowerCase()}</TickerName>
    <TickerLogo src={props.imageUrl} alt={`${props.name} Logo`} />
    <TickerCode>{props.code}</TickerCode>
    <Indicators>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>Preço</b></span>
        <span>R$ {props.prices[props.prices.length-1]?.price.toFixed(2)}</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>Variação</b></span>
        <span style={{
          color: props?.variation >= 0 ? 'green' : 'red'
        }}>{props.variation}%</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>PL</b></span>
        <span>{props.pl}</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>PVP</b></span>
        <span>{props.pvp}</span>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span><b>Dividendo</b></span>
        <span>{props.dy}%</span>
      </div>
    </Indicators>

    <Stacked data={chartPrices} />
  </Container>;
}

export default Ticker;
