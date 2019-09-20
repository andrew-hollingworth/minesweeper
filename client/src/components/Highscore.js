import React from 'react'
import { showHighScore, updateHighScores, userScores, showUserScores, addScores, deleteScores, recentScores, users } from '../services/api-helper'

class Highscore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalHighscore: [],
      globalUpdate: [],
      globalUser: [],
      userScores: [],
      userCreate: [],
      userDelete: [],
      userRecent: [],
      user: {},
    }
  }

  async componentDidMount() {
    let gHighscore = await showHighScore();
    let usersInfo = await users()
    // let gUpdate = await updateHighScores();
    // let gUser = await userScores(this.props.userLog || this.props.userReg);
    // let uHighscore = await showUserScores(props.username);*
    // let uAdd = await addScores();
    // let uDelete = await deleteScores();*
    // let uRecent = await recentScores();
    this.setState({
      globalHighscore: gHighscore,
      user: usersInfo,
      // globalUpdate: gUpdate,
      // globalUser: gUser,
      // userScores: uHighscore,
      // userCreate: uAdd,
      // userDelete: uDelete,
      // userRecent: uRecent,
    })
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
      </div>
    )
  }
}

export default Highscore;
