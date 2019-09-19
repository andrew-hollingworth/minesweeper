import React from 'react';

const Timer = (props) =>  {
  const { score } = props;
  return (
    <div>
      <p className='score'>{score} points</p>
    </div>
  );
}

export default Timer
