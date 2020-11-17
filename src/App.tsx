import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styles/Theme'
import Grid from './components/Grid';
import Header from './components/Header';
import Search from './components/Search';
import Ticker from './components/Ticker';
import Http from './services/Http';
import Sorting from './components/Sorting';

export interface IndicatorInterface {
  price: number,
  variation: number,
  pl: number,
  pvp: number,
  dy: number,
  createdAt: string
}

export interface PriceInterface {
  createdAt: string,
  price: number
}

export interface TickerInterface extends Document {
  name: string,
  code: string,
  imageUrl: string,
  variation: number,
  pl: number,
  pvp: number,
  dy: number
  prices: PriceInterface[]
}

function App() {
  const [tickers, setTickers] = useState<TickerInterface[]>()
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')
  const [direction, setDirection] = useState('desc')

  useEffect(() => {
    async function getTickers() {
      const { data } = await Http.get(`/tickers?limit=20&name=${filter}&order=${sort}&direction=${direction}`)
      setTickers(data.docs)
    }

    getTickers()

  }, [filter, sort, direction])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header></Header>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 .5rem'
      }}>
        <Search value={filter} onChange={({ target }) => setFilter(target.value)}></Search>
        <Sorting direction={direction} setDirection={setDirection} sort={sort} setSort={setSort} />
        <Grid>
          {tickers?.map(({ ...props }) => (
            <Ticker {...props} key={props.code} />
          ))}
        </Grid>

      </div>
    </ThemeProvider>
  );
}

export default App;
