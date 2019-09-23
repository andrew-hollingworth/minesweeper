import React from 'react'
import GlobalTable from './GlobalTable'
import UserTable from './UserTable'

function ScoreViewer(props) {
  console.log('scoreviewer', props.allHighScores);

  return (
    <>
      <button onClick={() => props.updateRank()}>Refresh Rankings</button>
      {props.allHighScores && props.allUsers && props.allHighScores.map((highscore, index) => {
        return (
          <GlobalTable
            key={index}
            score={highscore.scores}
            scoreUser={highscore.userId}
            allUsers={props.allUsers}
            rank={highscore.rank}
          />
        )
      })}
      <UserTable
        allHighScores={props.allHighScores}
        allUsers={props.allUsers}
        currentUser={props.currentUser}
        deleteScore={props.deleteScore} />
    </>
  )
};

export default ScoreViewer
