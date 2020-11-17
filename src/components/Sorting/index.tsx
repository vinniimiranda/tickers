import React from 'react';
import { FaSortDown, FaSortUp } from 'react-icons/fa'
import { Container, Sort } from './styles';

type SortingProps = {
  sort: string;
  direction: string;
  setSort: (state: string) => void;
  setDirection: (state: string) => void;
}

const Sorting: React.FC<SortingProps> = ({ sort, setSort, direction, setDirection }) => {
  return <Container>
    <Sort active={sort === 'prices.price'} onClick={() => {
      if (direction === 'desc' && sort !== 'prices.price') {
        setSort('prices.price')
      } else if (direction === 'desc' && sort === 'prices.price') {
        setDirection('asc')
      } else {
        setSort('')
        setDirection('desc')
      }
    }}>
      <span>
        Preço
      </span>
      <div>
        {<FaSortDown size={15} style={{
          transform: sort !== 'prices.price' ? 'scale(0)' : direction === 'asc' ? 'scale(1)' : 'scale(-1)',
          transition: 'all .4s ease'
        }} />}
      </div>
    </Sort>
    <Sort active={sort === 'variation'} onClick={() => {
      if (direction === 'desc' && sort !== 'variation') {
        setSort('variation')
      } else if (direction === 'desc' && sort === 'variation') {
        setDirection('asc')
      } else {
        setSort('')
        setDirection('desc')
      }
    }}>
      <span>
        Variação
      </span>
      <div>
        {<FaSortUp size={15} style={{
          transform: sort !== 'variation' ? 'scale(0)' : direction === 'asc' ? 'scale(1)' : 'scale(-1)',
          transition: 'all .2s ease'
        }} />}
      </div>
    </Sort>
    <Sort active={sort === 'dy'} onClick={() => {
      if (direction === 'desc' && sort !== 'dy') {
        setSort('dy')
      } else if (direction === 'desc' && sort === 'dy') {
        setDirection('asc')
      } else {
        setSort('')
        setDirection('desc')
      }
    }}>
      <span>
        Dividendo
      </span>
      <div>
        {<FaSortDown size={15} style={{
          transform: sort !== 'dy' ? 'scale(0)' : direction === 'asc' ? 'scale(1)' : 'scale(-1)',
          transition: 'all .4s ease'
        }} />}
      </div>
    </Sort>
  </Container>;
}

export default Sorting;
