import React from 'react'
import { showHighScore, userScores, users } from '../services/api-helper'

class Highscore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalHighscore: [],
      globalUser: null,
      userScores: [],
      userCreate: [],
      userDelete: [],
      userRecent: [],
      user: {},
    }
  }

  async componentDidMount() {
    let gHighscore = await showHighScore();
    let usersInfo = await users();
    let gUser = async () => {
      if (this.props.currentUser.Username) {
        gUser = await userScores(this.props.currentUser.username);
      }
    }
    this.setState({
      globalHighscore: gHighscore,
      globalUser: gUser,
      user: usersInfo,
    })
  }

  async componentWillUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      let gHighscore = await showHighScore();
      console.log('this is ghighscore', gHighscore);
      let gUser = await userScores(this.props.currentUser.username);
      let usersInfo = await users()
      await this.setState({
        globalHighscore: gHighscore,
        globalUser: gUser,
        user: usersInfo,
      })
    }
  }

  render() {
    let globalShow = this.state.globalHighscore.map((d, i) => {
      let thisUser = this.state.user.filter(user => user.id === d.userId)
      return (
        <React.Fragment key={i}>
          <p className='scoreboard-rank'>{d.rank}</p>
          <p className='scoreboard-username'>{thisUser[0].username}</p>
          <p className='scoreboard-score'>{d.scores}</p>
        </React.Fragment>
      )
    })

    return (
      <div className='scoreboard'>
        <div className='global'>
          <p className='scoreboard-rank'>Rank</p> <p className='scoreboard-username'>Username</p> <p className='scoreboard-score'>Score</p>
          {globalShow}
        </div>
        <div className='user'>
          {this.state.globalUser && this.state.globalUser.highscores.scores}

        </div>
      </div>
    )
  }
}

export default Highscore;
