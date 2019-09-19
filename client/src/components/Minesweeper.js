import React from 'react'
import Box from './Box'
import Timer from './Timer'

function Minesweeper (props) {
  return (
    <div className='game-container'>
      <h1 className='henny game-title'>Munch-a-Cookie</h1>
      <h4 className='henny instructions'>Click a cookie to munch it, but watch out for poison cookies!</h4>
      <h4 className='henny instructions'>It's like Minesweeper, except more delicious.</h4>
      <h4 className='henny instructions'>Use CTRL+click to mark poison cookies.</h4>
      <Timer
        score={props.score}
        timerClick={props.timerClick}
        timerReset={props.timerReset}/>
      <div className='board' >
        {props.board.map((board, i) => {
          return (
            <Box
              key={i}
              board={board}
              boxClick={props.boxClick}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Minesweeper
