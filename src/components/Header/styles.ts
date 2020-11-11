import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 55px;
  background-color: ${prop => prop.theme.palette.primary.main};
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .10);
`;
