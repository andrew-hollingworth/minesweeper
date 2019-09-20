import React from 'react'
import Signup from './Signup'
import './usermodal.css'

function UserModal(props) {
  return (
    <div className={`user-box ${props.isUserModal && "showing-modal"}`}>
      {/*<button className='close' onClick = {props.userModalClick}>Close</button>*/}
      <Signup
      {...props}
      />
    </div>
  )
}

export default UserModal
