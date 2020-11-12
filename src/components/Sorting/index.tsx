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
    <Sort active={sort === 'indicators.price'} onClick={() => {
      if (direction === 'desc' && sort !== 'indicators.price') {
        setSort('indicators.price')
      } else if (direction === 'desc' && sort === 'indicators.price') {
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
        {sort === 'indicators.price' && <FaSortDown size={15} style={{
          transform: direction === 'asc' ? 'rotateX(180deg)' : 'rotateX(0)'
        }} />}
      </div>
    </Sort>
    <Sort active={sort === 'indicators.variation'} onClick={() => {
      if (direction === 'desc' && sort !== 'indicators.variation') {
        setSort('indicators.variation')
      } else if (direction === 'desc' && sort === 'indicators.variation') {
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
        {sort === 'indicators.variation' && <FaSortUp size={15} style={{
          transform: direction === 'asc' ? 'rotateX(180deg)' : 'rotateX(0)'
        }} />}
      </div>
    </Sort>
    <Sort active={sort === 'indicators.dy'} onClick={() => {
      if (direction === 'desc' && sort !== 'indicators.dy') {
        setSort('indicators.dy')
      } else if (direction === 'desc' && sort === 'indicators.dy') {
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
        {sort === 'indicators.dy' && <FaSortDown size={15} style={{
          transform: direction === 'asc' ? 'rotateX(180deg)' : 'rotateX(0)'
        }} />}
      </div>
    </Sort>
  </Container>;
}

export default Sorting;
