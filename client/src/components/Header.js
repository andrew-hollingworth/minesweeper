import React from 'react'
import Nav from './Nav'

function Header(props) {
  return (
    <div className='header'>
      <h1>Welcome to the Arcade!</h1>
      <Nav modalClick = {props.modalClick}/>
    </div>
  )
}

export default Header
