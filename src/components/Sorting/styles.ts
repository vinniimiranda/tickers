import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0;
  
`;

type SortProps = {
  active?: boolean;
}

export const Sort = styled.div<SortProps>`
  display: flex;
  align-items: center;
  padding: .4rem 1.2rem;
  border-radius: .3rem;
  color: ${props => props.active ? props.theme.palette.primary.main : '#666'};
  transition: all .3s ease-in;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  
  /* margin: 0 .5rem; */
  cursor: pointer;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &:hover{
    color: ${props => props.theme.palette.primary.main};
  }
  
`
