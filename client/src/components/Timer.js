import React from 'react';

const Timer = (props) =>  {
  let winMessage = (win) => {
    if (win === 'win') {
      return `You win! Play Again!`
    } else if (win === 'lose') {
      return `You lose, play again!`
    } else {
      return `New Game`
    }
  }
  const { score } = props;
  return (
    <div>
      <p className='score'>{score} points</p>
      <button onClick={() => props.resetGame()} className='score new-game'>{winMessage(props.win)}</button>
    </div>
  )
}

export default Timer
