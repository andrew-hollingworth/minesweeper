import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <div className='nav'>
      <button className='nav-link' onClick = {props.userModalClick}>Login/Signup</button>
      <button className='nav-link'><Link to='/about'>About</Link></button>
      <button className='nav-link' onClick = {props.gameModalClick}>Play Games!</button>
    </div>
  )
}

export default Nav
