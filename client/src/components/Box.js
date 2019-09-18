import React from 'react'

const Box = (props) => {
  let bombStatus = props.board.isBomb;
  return (
    <div>
      <button onClick={()=>{props.boxClick(props.board.x, props.board.y)}}>{(bombStatus ? "true" : "   ")}</button>
    </div>
  )
}

export default Box
