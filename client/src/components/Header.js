import React from 'react'
import Nav from './Nav'

function Header(props) {
  return (
    <div className='header'>
      <h1 className='welcome'>Welcome to the Arcade!</h1>
      <Nav
        userModalClick = {props.userModalClick}
        gameModalClick = {props.gameModalClick}/>
    </div>
  )
}

export default Header
