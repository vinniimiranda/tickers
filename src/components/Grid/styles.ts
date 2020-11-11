import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 2fr));
  grid-gap: 2rem;
`;
