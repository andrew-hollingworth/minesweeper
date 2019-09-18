import React from 'react'
import Box from './Box'

function Minesweeper (props) {
  return (
    <React.Fragment>
        <h1>Minesweeper</h1>
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
