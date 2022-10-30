import React from 'react'
import styled, { css } from 'styled-components' 

const Button = styled.button`
 padding: 5px 15px;
 color: palevioletred;
 font-size: 14px;
 background: transparent;
 border: 1px solid palevioletred;
 border-radius: 10px;
 cursor: pointer;

 &:hover {
    color: white;
    background-color: palevioletred;
  }

 ${props => props.pagination && css`
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
  `}

  ${props => props.current && css`
    padding: 10px;
    border: 2px solid palegreen;
    color: palegreen;
    font-weight: bold;
    &:hover {
    color: white;
    background-color: palegreen;
  }
  `}
`

const MyButton = ({children, ...props}) => {
  return (
    <Button {...props} >{children}</Button>
  )
}

export default MyButton