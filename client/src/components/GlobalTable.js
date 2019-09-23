import React from 'react'

function GlobalTable(props) {
  let userName
  (props.allUsers.forEach((user) => {
    if (user.id === props.scoreUser) {
      userName = user.username
    }
  }))
  return (
    <div className="highscore-entry">
      <p className='highscore-user'>{userName}</p>
      <p className='highscore-rank'>Rank: {props.rank}</p>
      <p className='highscore-score'>Score: {props.score}</p>
    </div>
  )
}

export default GlobalTable
