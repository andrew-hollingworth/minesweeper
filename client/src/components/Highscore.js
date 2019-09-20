import React from 'react'
import { showHighScore, updateHighScores, userScores, showUserScores, addScores, deleteScores, recentScores, users } from '../services/api-helper'

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
    let gUser = await userScores(this.props.currentUser.username);
    let usersInfo = await users()
    // let gUpdate = await updateHighScores();
    // let gUser = await userScores(this.props.userLog || this.props.userReg);
    // let uHighscore = await showUserScores(props.username);*
    // let uAdd = await addScores();
    // let uDelete = await deleteScores();*
    // let uRecent = await recentScores();
    this.setState({
      globalHighscore: gHighscore,
      globalUser: gUser,
      user: usersInfo,
      // globalUpdate: gUpdate,
      // globalUser: gUser,
      // userScores: uHighscore,
      // userCreate: uAdd,
      // userDelete: uDelete,
      // userRecent: uRecent,
    })
  }

  async componentWillUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      let gHighscore = await showHighScore();
      let gUser = await userScores(this.props.currentUser.username);
      // let uHighscore = await showUserScores(props.username);*
      // let uAdd = await addScores();
      // let uDelete = await deleteScores();*
      // let uRecent = await recentScores();
      this.setState({
        globalHighscore: gHighscore,
        globalUser: gUser,
        // userScores: uHighscore,
        // userCreate: uAdd,
        // userDelete: uDelete,
        // userRecent: uRecent,
      })
    }
  }

  render() {
    let globalShow = this.state.globalHighscore.map((d, i) => {
      let thisUser = this.state.user.filter( user => user.id === d.userId)
      return (
        <div key={i}>
          <p className='scoreboard-rank'>{d.rank}</p> <p className='scoreboard-username'>{thisUser[0].username}</p> <p className='scoreboard-score'>{d.scores}</p>
        </div>
      )
    })
    return (
      <div className='scoreboard'>
        <div className='global'>
          <p className='scoreboard-rank'>Rank</p> <p className='scoreboard-username'>Username</p> <p className='scoreboard-score'>Score</p>
          {globalShow}
        </div>
        <div className='user'>
        {this.state.globalUser && this.state.globalUser.highscores.length && this.state.globalUser.highscores[0].scores}
        </div>
      </div>
    )
  }
}

export default Highscore;
