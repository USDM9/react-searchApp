import { useMemo } from 'react'

import styled from 'styled-components'

const StyledMarked = styled.span`
    background-color: yellow;
    font-weight: bolder;
    border-radius: 2px;
`

const StyleItem = styled.a`
    color: black;
    display: block;
    padding: 10px;
    border: none;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: #4c91ba;
      color: white;
    }

    &:hover span {
      color: black;
    }

`
export const MarkedItem = ({ item, query, onClick }) => {
  const { left, center, right } = useMemo(
    () => getPositions(item, query), [item, query]
  )

  function getPositions (item, query) {
    const index = item.title.toLowerCase().indexOf(query)
    const left = item.title.slice(0, index)
    const right = item.title.slice(index + query.length)
    const center = item.title.slice(index, index + query.length)

    return { left, center, right }
  }

  function handleClick () {
    onClick(item)
  }

  return (
    <StyleItem onClick={handleClick}>
      {left}
      <StyledMarked>{center}</StyledMarked>
      {right}
    </StyleItem>
  )
}
