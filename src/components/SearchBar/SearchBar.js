import React from 'react'
import { Container, PrincipalTitle, Title, Input, Button } from './SearchBar.style'

const SearchBar = () => (
  <>
    <PrincipalTitle>
      Git<Title>Search</Title>
    </PrincipalTitle>

    <Container>
      <Input />
      <Button><img src='../search.png'/></Button>
    </Container>
  </>
)

export default SearchBar
