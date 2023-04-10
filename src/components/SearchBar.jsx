import { useState } from 'react'
import { Resoults } from './Resoults'

import styled from 'styled-components'

const SearchBarContainer = styled.div`  
  margin: 0 auto;
  position: relative;
  width: 400px;
  `
const StyledInput = styled.input`
  padding: 10px; 
  border-radius: 5px;
  min-width: 400px; 
  box-sizing: border-box;
  border: solid 1px #222;
  outline: none;
  `

export const SearchBar = ({ items, onItemSelected }) => {
  const [query, setQuery] = useState('ma')
  const [results, setResults] = useState([])

  function handleChange (e) {
    const value = e.target.value
    setQuery(value)
  }

  function handleResoults (items) {
    setResults(items)
  }

  return (
    <SearchBarContainer>
      {results ? <div>Resoults: {results.length}</div> : ''}
      <StyledInput onChange={handleChange} value={query} />
      <Resoults
        items={items}
        onItemSelected={onItemSelected}
        query={query}
        onResultsCalculated={handleResoults}
      />
    </SearchBarContainer>
  )
}
