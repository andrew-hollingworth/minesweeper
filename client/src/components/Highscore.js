import React from 'react'
import { showHighScore, updateHighScore, userScores, showUserScores, addScores, deleteScore, recentScore } from '../services/api-helper'

class Highscore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highscore: []
    }
  }

  async componentDidMount() {
    let display = await showHighScore();

    this.setState({
      highscore: display
    })
  }
  render() {
    let show = this.state.highscore.map((d, i) => {
      return (
        <div key={i}>
          {d.rank}
          {d.userId}
          {d.scores}
        </div>
      )
    })
    return (
      <div>
        <div className='global'>
          {show}
        </div>
        <div className='user'>
        </div>
      </div>
    )
  }
}

export default Highscore;
