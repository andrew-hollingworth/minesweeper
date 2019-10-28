import React from 'react'
import Box from './Box'
import Timer from './Timer'

function Minesweeper(props) {
  return (
    <div className='game-container'>
      <h1 className='raleway game-title'>Munch-a-Cookie</h1>
      <h4 className='raleway instructions'>Click a cookie to munch it, but watch out for poison cookies!</h4>
      <h4 className='raleway instructions'>It's like Minesweeper, except more delicious.</h4>
      <h4 className='raleway instructions'>Use Shift+click to mark poison cookies.</h4>
      <h4 className='raleway instructions'>The goal is to get the lowest score possible!</h4>
      <h4 className='raleway instructions'>Like golf. Sort of.</h4>
      <Timer
        score={props.score}
        timerClick={props.timerClick}
        timerReset={props.timerReset}
        win={props.win}
        resetGame={props.resetGame} />
      <div className='board' >
        {props.board.map((board, i) => {
          return (
            <Box
              key={i}
              index={i}
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
