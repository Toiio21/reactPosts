import React from 'react'
import styled, { css } from 'styled-components'


const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  background: rgba(0, 0, 0, 0.5);

  ${props => props.active && css`
    display: flex;
    justify-content: center;
    align-items: center;

  `}
`

const ModalContent = styled.div`
  padding: 25px;
  background: white;
  border-radius: 16px;
  min-width: 250px;

`

const MyModal = ({children, visible, setVisible}) => {
  return (
    <Modal active={visible} onClick={() => setVisible(false)}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {children}
      </ModalContent>
    </Modal>
  )
}

export default MyModal