import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <React.Fragment>
      <button onClick = {props.userModalClick}>Login/Signup</button>
      <Link to='/about'>About</Link>
      <button onClick = {props.gameModalClick}>Play Games!</button>
    </React.Fragment>
  )
}

export default Nav
