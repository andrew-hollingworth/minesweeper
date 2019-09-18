import React from 'react'
import Box from './Box'
import Timer from './Timer'

function Minesweeper (props) {
  return (
    <React.Fragment>
        <h1>Minesweeper</h1>
        <Timer
          score={props.score}
          timerStatus={props.timerStatus}
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
    </React.Fragment>
  )}

export default Minesweeper
