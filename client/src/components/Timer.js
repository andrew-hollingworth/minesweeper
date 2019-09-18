import React from 'react';

const Timer = (props) =>  {
  const { timerStatus, score } = props;
  return (
    <div>
      <p>{score}ms</p>
    </div>
  );
}

export default Timer
