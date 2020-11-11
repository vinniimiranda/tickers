import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 2rem 0;
  `;
export const Input = styled.input`
  border: 2px solid ${prop => prop.theme.palette.primary.main};
  padding: .8rem .85rem;
  border-radius: .3rem;
  outline: 0;
  width: 400px;
  color: #333;
`
