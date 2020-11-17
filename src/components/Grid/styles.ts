import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  text-align: center;
  
  @media(min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  }
  
  @media(max-width: 425px) {
    grid-template-columns: repeat(auto-fill, minmax(96%, 1fr));

  }

  grid-gap: 2rem;
`;
