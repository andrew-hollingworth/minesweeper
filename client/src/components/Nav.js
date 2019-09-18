import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <React.Fragment>
      <Link to='/about'>About</Link>
      <button onClick = {props.modalClick}>Login/Signup</button>
      <Link to='/'>Play Minesweeper!</Link>
    </React.Fragment>
  )
}

export default Nav
