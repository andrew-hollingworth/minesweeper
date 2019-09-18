import React from 'react'
import Signup from './Signup'
import usermodal from './usermodal.css'

function UserModal(props) {
  return (
    <div className={`user-box ${props.isUserModal && "showing-modal"}`}>
      <Signup
      {...props}
      />
      <button onClick = {props.userModalClick}>x</button>
    </div>
  )
}

export default UserModal
