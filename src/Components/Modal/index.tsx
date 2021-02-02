import React from 'react'
import { StyledModal, StyledContent} from './style'
import { FontAwesomeIcon } from '/ui/Sider/node_modules/@fortawesome/react-fontawesome'
import { faTimes } from '/ui/Sider/node_modules/@fortawesome/free-solid-svg-icons'

type Prop ={
  open: boolean
  children: React.ReactNode
  onClose: () => void

}

const Modal = ({open, onClose,children}: Prop) => (
  <StyledModal open={open}>
    <StyledContent>
    <FontAwesomeIcon
        icon={faTimes}
        color='black'
        onClick={onClose}
      />
      {children}
    </StyledContent>
  </StyledModal>
)
export default Modal