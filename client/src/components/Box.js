import React from 'react'

// COOKIE: <i className="fas fa-cookie-bite">
// SKULL: <i className="fas fa-skull-crossbones"></i>
// GRIMACE: <i className="far fa-grimace"></i>
//

const Box = (props) => {
  return (
    <div className='box'>
      <button className=
        {props.board.isRevealed ? `${props.board.isBomb ? `bomb-button` : `box-button`}` : `${props.board.isFlag ? `grimace-button` : `box-button`}`}
        onClick={(e) => { props.boxClick(props, e) }}>
        {props.board.isRevealed ? (props.board.neighborBombs ? props.board.neighborBombs : props.board.isBomb ? <i className='fas fa-skull-crossbones'></i> : '') : <i className={props.board.isRevealed ? `${props.board.isBomb ? `fas fa-skull-crossbones` : `fas fa-cookie-bite`}` : `${props.board.isFlag ? `far fa-grimace` : `fas fa-cookie-bite`}`}></i> }

      </button>
    </div>
  )
}

export default Box
