import React from 'react'
import styled, { keyframes } from 'styled-components'

const animationCircle = keyframes`
 from {
  transform: rotate(0deg) scale(1);
 }
 to {
  transform: rotate(360deg) scale(1.2);
 }
`

const Container = styled.div`
 width: 100px;
 height: 100px;
 border-radius: 50%;
 border: 3px dashed palevioletred;
 animation-name: ${animationCircle};
 animation-duration: 1s;
 animation-iteration-count: infinite;
 animation-timing-function: linear;
`

const Loader = () => {
  return (
    <Container></Container>
  )
}

export default Loader