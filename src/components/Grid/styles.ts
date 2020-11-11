import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fill, minmax(380px, 2fr));
  grid-gap: 2rem;
  padding: 1rem;
`;
