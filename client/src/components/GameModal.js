import React from 'react'
import { Link } from 'react-router-dom'
import './gamemodal.css'

function GameModal(props) {
  return (
    <div className={`game-box ${props.isGameModal && "showing-modal"}`}>
      <Link to='/minesweeper'>Minesweeper</Link>
      <button onClick = {props.gameModalClick}>x</button>
    </div>
  )
}

export default GameModal
