import React from 'react';

import { Container, Input } from './styles';

type SearchProps = {
  value: any;
  onChange: (params: any) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange}) => {
  return <Container>
    <Input value={value} onChange={onChange} placeholder="Pesquisar" />
  </Container>;
}

export default Search;
