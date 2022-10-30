import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
 width: 93%;
 padding: 5px 15px;
 margin: 5px 0;
 border: 1px solid black;

`

const MyInput = (props) => {
  return (
    <Input {...props} />
  )
}

export default MyInput