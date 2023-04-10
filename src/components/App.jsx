import { useState } from 'react'
import { SearchBar } from './Searchbar'

import styled from 'styled-components'

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: white;
  border:solid: 1px #ccc;
  cursor: pointer;

  &:hover{
    background-color: #bbbbbb;
  }
`

const people = [
  {
    id: 'people-01',
    title: 'Juan Perez'
  },
  {
    id: 'people-02',
    title: 'Marcos Rivas'
  },
  {
    id: 'people-03',
    title: 'Sergio Martinez'
  },
  {
    id: 'people-04',
    title: 'Laura Jimenez'
  },
  {
    id: 'people-05',
    title: 'Horario Martinez'
  }

]

const calendar = [
  {
    id: 'calendar-01',
    title: 'Sesion de seguimiento'
  },
  {
    id: 'calendar-02',
    title: 'Revision de propuestas'
  },
  {
    id: 'calendar-03',
    title: 'Evento para donar juguetes'
  },
  {
    id: 'calendar-04',
    title: 'Junta semanal de equipo'
  },
  {
    id: 'calendar-05',
    title: 'Revison de pendientes con cliente'
  }
]

const email = [
  {
    id: 'email-01',
    title: 'Reporte de resultados'
  },
  {
    id: 'email-02',
    title: 'Requisitos para cambio'
  },
  {
    id: 'email-03',
    title: 'Estatus de funcionalidad'
  },
  {
    id: 'email-04',
    title: 'Proximos eventos'
  },
  {
    id: 'email-05',
    title: 'Participa en la encuesta'
  }
]

export const App = () => {
  const [data, setData] = useState([...people, ...calendar, ...email])
  const [selection, setSelection] = useState(null)
  const [currentOption, setCurrentOption] = useState('all')

  function handleClick (e) {
    const op = e.target.name

    if (op === 'all') {
      setData([...people, ...calendar, ...email])
      setCurrentOption('all')
    }

    if (op === 'people') {
      setData([...people])
      setCurrentOption('people')
    }

    if (op === 'calendar') {
      setData([...calendar])
      setCurrentOption('calendar')
    }

    if (op === 'email') {
      setData([...email])
      setCurrentOption('email')
    }
  }

  function handleItemSelected (item) {
    setSelection(item)
  }

  return (
    <main>
      <Button onClick={handleClick} name='all'>All</Button>
      <Button onClick={handleClick} name='people'>People</Button>
      <Button onClick={handleClick} name='calendar'>Calendar</Button>
      <Button onClick={handleClick} name='email'>Email</Button>
      {selection ? <div style={{ color: 'black' }}>You has selected: {selection.title}</div> : ''}
      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </main>
  )
}
