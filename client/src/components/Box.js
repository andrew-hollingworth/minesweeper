import React from 'react'

const Box = (props) => {
  let bombStatus = props.board.isBomb.toString();
  return (
    <div>
      <button onClick={(e)=>{props.boxClick(e)}}>{bombStatus}</button>
    </div>
  )
}

export default Box
