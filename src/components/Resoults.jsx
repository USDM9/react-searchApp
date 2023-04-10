import { useEffect, useState, useMemo } from 'react'
import { MarkedItem } from './MarkedItem'

import styled from 'styled-components'

const ResoultsContainer = styled.div`
position: absolute;
width: 400px;
background: white;
border: solid 1px #222;
border-top: solid 1px trasparent;
margin-top: -3px;
box-sizing: border-box;
border-radius: 0 0 5px 5px;
`

export const Resoults = ({ items, onItemSelected, query, onResultsCalculated }) => {
  const [results, setResults] = useState([])
  const filteredItems = useMemo(() => findMach(items, query), [items, query])

  useEffect(() => {
    onResultsCalculated(results)
  }, [results])

  function findMach () {
    const res = items.filter(item => {
      return item.title.toLowerCase().indexOf(query) >= 0 && query.length > 0
    })

    setResults(res)
    return res
  }

  return (
    <ResoultsContainer>
      {query !== '' ? filteredItems.map(item => <MarkedItem key={item.id} item={item} query={query} onClick={onItemSelected} />) : ''}
    </ResoultsContainer>
  )
}
