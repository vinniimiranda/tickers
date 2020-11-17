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
    <Sort active={sort === 'price'} onClick={() => {
      if (direction === 'desc' && sort !== 'price') {
        setSort('price')
      } else if (direction === 'desc' && sort === 'price') {
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
        {sort === 'price' && <FaSortDown size={15} style={{
          transform: direction === 'asc' ? 'rotateX(180deg)' : 'rotateX(0)'
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
        {sort === 'variation' && <FaSortUp size={15} style={{
          transform: direction === 'asc' ? 'rotateX(180deg)' : 'rotateX(0)'
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
        {sort === 'dy' && <FaSortDown size={15} style={{
          transform: direction === 'asc' ? 'rotateX(180deg)' : 'rotateX(0)'
        }} />}
      </div>
    </Sort>
  </Container>;
}

export default Sorting;
