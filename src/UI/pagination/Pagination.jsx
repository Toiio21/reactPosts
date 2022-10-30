import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 30px;
 display: flex;
`

const Pagination = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default Pagination