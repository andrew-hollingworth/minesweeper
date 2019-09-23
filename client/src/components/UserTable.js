import React from 'react'

function UserTable(props) {
  let currentUser
  if (props.currentUser) { currentUser = props.currentUser.username }
  console.log('this is currentuser variable', currentUser);
  return (
    <>
      {props.currentUser && <h3>{currentUser}'s Scoreboard:</h3>}
      {props.currentUser && props.allHighScores.map((highscore, index) => {
        if (highscore.userId === props.currentUser.id) {
          return (
            <div key={index}>
              <p>Global Rank: {highscore.rank}</p>
              <p>Score: {highscore.scores}</p>
              <button onClick={() => props.deleteScore(highscore.id)}>Delete Score</button>
            </div>
          )
        }
      })}
    </>
  )
}

export default UserTable
