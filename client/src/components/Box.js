import React from 'react'

// COOKIE: <i class="fas fa-cookie-bite">
// SKULL: <i class="fas fa-skull-crossbones"></i>
// GRIMACE: <i class="fas fa-grimace"></i>

const Box = (props) => {
  return (
    <div className='box'>
      <button className='grimace-button' onClick={(e)=>{props.boxClick(props, e)}}>
        <i class="far fa-grimace"></i>
      </button>
    </div>
  )
}

export default Box
