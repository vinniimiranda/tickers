import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 2rem 0;
  `;
export const Input = styled.input`
  padding: 1rem;
  border-radius: .45rem;
  outline: 0;
  width: 600px;
  height: 25px;
  color: #333;
  font-size: 1rem;
  border: 1px solid #ddd;
    transition: all .3s ease-in;

  &:focus {
    /* box-shadow: 0px 0px 20px #eee; */
    border: 1px solid transparent;
    filter: drop-shadow(0px 0px 2px ${props => props.theme.palette.primary.main})
  }
`
