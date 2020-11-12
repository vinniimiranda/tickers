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
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, .1); */
  border: 1px solid #f5f5f5;
  padding: .3rem 1rem;
  border-radius: .3rem;
  background-color: ${props => props.active ? props.theme.palette.primary.main : '#f5f5f5'};
  color: ${props => props.active ? props.theme.palette.primary.contrastText : '#333'};
  margin: 0 .5rem;
  cursor: pointer;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
`
