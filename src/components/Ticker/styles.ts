import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, .1);
  background-color: ${({ theme}) => theme.palette.background.main };
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
  
`;

export const TickerName = styled.span`
  font-size: 1.1rem;
  text-overflow: ellipsis;
  text-transform: capitalize;
`;

export const TickerLogo = styled.img`
  width: 10rem; 
  margin: .5rem 0;
`

export const TickerCode = styled.span`
  font-size: 1rem;
  background-color: ${prop => prop.theme.palette.primary.main};
  padding: .4rem;
  border-radius: 4px;
  color: ${prop => prop.theme.palette.primary.contrastText};
  justify-self: flex-end; 
`

export const Indicators = styled.div`
  display: flex;
  flex: 1;
  width: 90%;
  margin-top: 1rem;
  justify-content: space-between;
`
