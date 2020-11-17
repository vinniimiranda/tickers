import React from 'react';
import { DebounceInput } from 'react-debounce-input';

import { Container, Input } from './styles';

type SearchProps = {
  value: any;
  onChange: (params: any) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return <Container>
    <DebounceInput
      minLength={3}
      debounceTimeout={300}
      value={value}
      onChange={onChange}
      element={Input}
      placeholder="Pesquisar nome ou código, separando por vírgula cada ativo" />
  </Container>;
}

export default Search;
