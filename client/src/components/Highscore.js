import React from 'react'
import { showHighScore, updateHighScores, userScores, showUserScores, addScores, deleteScores, recentScores } from '../services/api-helper'

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
    }
  }

  async componentDidMount() {
    let gHighscore = await showHighScore();
    // let gUpdate = await updateHighScores();
    // let gUser = await userScores(this.props.userLog || this.props.userReg);
    // let uHighscore = await showUserScores(props.username);*
    // let uAdd = await addScores();
    // let uDelete = await deleteScores();*
    // let uRecent = await recentScores();
    this.setState({
      globalHighscore: gHighscore,
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
      return (
        <div key={i}>
          {d.rank}
          {d.userId}
          {d.scores}
        </div>
      )
    })
    let globalUser = this.state.globalUser.map((d, i) => {
      return (
        <div key={i}>
          {d.username}
        </div>
      )
    })
    return (
      <div>
        <div className='global'>
          {globalShow}
        </div>
        <div className='user'>
        </div>
      </div>
    )
  }
}

export default Highscore;
