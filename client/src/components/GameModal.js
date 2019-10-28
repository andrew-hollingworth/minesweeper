import React from 'react'
import { Link } from 'react-router-dom'
import './gamemodal.css'

function GameModal(props) {
  return (
    <div className={`game-box ${props.isGameModal && "showing-modal"}`}>
      <Link className='minesweeper' to='/minesweeper'><div>Minesweeper</div></Link>
      <Link className='highscores' to='/highscores'><div>High Scores</div></Link>
      <button className='close' onClick={props.gameModalClick}>X</button>
    </div>
  )
}

export default GameModal
