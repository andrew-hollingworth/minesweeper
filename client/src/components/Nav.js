import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <React.Fragment>
      <Link to='/about'>About</Link>
      <Link to='/auth'>Login/Signup</Link>
      <Link to='/'>Play Minesweeper!</Link>
    </React.Fragment>
  )
}

export default Nav
