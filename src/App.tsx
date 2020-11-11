import React, { useEffect, useState } from 'react';
import Grid from './components/Grid';
import Header from './components/Header';
import Search from './components/Search';
import Ticker from './components/Ticker';
import Http from './services/Http';

export interface IndicatorInterface {
  price: number,
  variation: number,
  pl: number,
  pvp: number,
  dy: number,
}

interface Papers {
  code: string
  name: string,
  imageUrl: string
  indicators: IndicatorInterface[]
}

function App() {
  const [papers, setPapers] = useState<Papers[]>()
  const [filter, setFilter] = useState('')
  useEffect(() => {
    async function getPapers() {
      const { data } = await Http.get('/tickers?limit=200')
      setPapers(data.items)
    }

    getPapers()

  }, [])

  return (
    <>
      <Header></Header>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 .5rem'
      }}>
       <Search value={filter} onChange={({ target }) => setFilter(target.value)}></Search>
        <Grid>
          {papers?.filter(({ name }) => name.toLowerCase().match(filter.toLowerCase())).map(({ code, imageUrl, name, indicators }) => (
            <Ticker name={name} code={code} imageUrl={imageUrl} indicators={indicators[0]} />
          ))}
        </Grid>

      </div>
    </>
  );
}

export default App;
