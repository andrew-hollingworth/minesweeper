import React from 'react'

const Box = (props) => {
  let bombStatus = props.board.isBomb;
  return (
    <div>
      <button onClick={(e)=>{props.boxClick(props, e)}}>#</button>
    </div>
  )
}

export default Box
