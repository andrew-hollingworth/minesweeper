import React from 'react'
import { showHighScore, userScores, showUserScores, addScores, deleteScores, recentScores } from '../services/api-helper'

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
    }
  }

  async componentDidMount() {
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
    console.log(this.state.globalUser)
    let globalShow = this.state.globalHighscore.map((d, i) => {
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
          {globalShow}
        </div>
        <div className='user'>
        {this.state.globalUser && this.state.globalUser.highscores[0].scores}
        </div>
      </div>
    )
  }
}

export default Highscore;
