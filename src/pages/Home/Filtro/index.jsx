import React, { useState } from 'react'
import { Formulario, Input } from './style';

function Filtro(props) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value)
    props.onChangeFiltroValue(event.target.value)
  }

  return (
    <Input>
    <Formulario type='text' value={inputValue} onChange={handleInputChange} className='form-control' placeholder='Search'></Formulario>
    </Input>
  )
}

export default Filtro;