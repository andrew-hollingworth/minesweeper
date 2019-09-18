import React from 'react'
import Signup from './Signup'
import modal from './modal.css'

function Modal(props) {
  return (
    <div className={`box ${props.isModal && "showing-modal"}`}>
      <Signup
      {...props}
      />
    </div>
  )
}

export default Modal
