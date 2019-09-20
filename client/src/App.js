import React, { Component } from 'react';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'
import { login, register, allUsers, addScores } from './services/api-helper'
import { genBoard, areaArnd } from './services/board-helper'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Minesweeper from './components/Minesweeper'
import UserModal from './components/UserModal'
import GameModal from './components/GameModal'
import Highscore from './components/Highscore'
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      login: {
        username: '',
        password: '',
      },
      register: {
        username: '',
        email: '',
        password: '',
      },
      board: [],
      score: 0,
      timerStatus: false,
      isUserModal: true,
      isGameModal: true,
      win: null,
    }
  }

// ============USER FUNCTIONS =============== //
  handleLoginChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      login: {
        ...prevState.login,
        [name]: value,
      }
    }));
  }

  handleRegisterChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      register: {
        ...prevState.register,
        [name]: value,
      }
    }));
  }

  submitSignUp = async (e) => {
    e.preventDefault();
    const userData = register(this.state.register);
  }

  submitLogIn = async (e) => {
    e.preventDefault();
    const userData = login(this.state.login)
  }

// ============MODAL FUNCTIONS=============== //
  userModalClick = () => {
    this.setState(prevState => ({
      isUserModal: !prevState.isUserModal
    }))
  }

  gameModalClick = () => {
    this.setState(prevState => ({
      isGameModal: !prevState.isGameModal
    }))
  }

  // ============TIMER/SCORE FUNCTIONS=============== //
  // https://wsvincent.com/react-stopwatch/
  timerClick = () => {
    this.setState(state => {
        if (state.timerStatus) {
          clearInterval(this.timer);
        } else {
          const startTime = Date.now() - this.state.score;
          this.timer = setInterval(() => {
            this.setState({ score: Date.now() - startTime });
          });
        }
        return { timerStatus: !state.status };
      });
    };
  timerReset = () => {
    this.setState({ score: 0, timerStatus: false });
  };

// ============BOX FUNCTIONS=============== //
// https://stackoverflow.com/questions/38974744/how-to-detect-click-shift-ctrl-alt-in-reactjs-click-event

  boxStateFunc = (props, boxProperty) => {
    this.setState(prevState => ({
      board: prevState.board.map((box, index) => index === props.index ? (
          {
            ...box,
          [boxProperty]: !box[boxProperty]
          }
        ) : box)
    }))
  }

  reveal = (props, board) => {
    this.setState(prevState => ({
      board: prevState.board.map((box, index) => index === props.index ? (
        {
          ...box,
        isRevealed: true
        }
      ) : box)
    }))
  }
  // THANKS DAVID WHITLATCH
  checkNeighbor = (x, y, tile, board) => {
    let neighbors = areaArnd(x, y, 9, 9);
    neighbors = neighbors.map((neighbor) => {
      return this.state.board.find((item) => {
        return item.x === neighbor[0] && item.y === neighbor[1]
      })
    });
    neighbors = neighbors.filter(space => !space.isRevealed);
    neighbors.forEach(currentNeighbor => {
      currentNeighbor.isRevealed = true;
      this.setState(prevState => ({
        board: prevState.board.map((box, index) => index === currentNeighbor.index ? currentNeighbor : box)
      }))
      if (currentNeighbor.neighborBombs === 0) {
        this.checkNeighbor(currentNeighbor.x, currentNeighbor.y, currentNeighbor, board)
      }
    })
  }

  revealFunc = (x, y, tile, board) => {
    this.reveal(tile, board)
    if (tile.neighborBombs === 0) {
      this.checkNeighbor(x, y, tile, board)
    }
  }

  winState = (string) => {
    this.setState((prevState) => ({
      win: string,
    }));
  }

  scorePost = async (id, score) => {
    await addScores(id, score)
  }

  boxClick = (props, e) => {
    if (this.state.timerStatus === false) {
      this.timerClick();}
    if ( e.shiftKey ) {
      this.boxStateFunc(props, `isFlag`)
    } else {
      if (props.board.isBomb) {
        const bombs = this.state.board.filter( element => element.isBomb );
        bombs.forEach((bomb) => {
          this.boxStateFunc(bomb, `isRevealed`)
        })
        this.timerClick();
        this.winState('lose');
      } else if (!props.board.isRevealed) {
        this.revealFunc(props.board.x, props.board.y, props.board, this.state.board)
      }
    }
    let win = this.state.board.filter( element => element.isRevealed === false ).length
    if (win === 11) {
      this.timerClick();
      this.winState('win');
      this.addScores(id, this.state.score)
    }
    }

  buildBoard = async () => {
    const board = await genBoard(10, 9, 9);
    await this.setState({ board })
  }

  resetGame = () => {
      const board = genBoard(10, 9, 9);
      this.setState({ board })
      if (this.state.timerStatus) {
        this.timerClick();
      }
      this.timerReset()
      this.winState(null)
    }

  componentDidMount() {
    this.buildBoard();
  }

  render() {
    return (
      <div className="App">
        <Header
          userModalClick = {this.userModalClick}
          gameModalClick = {this.gameModalClick}/>
        <UserModal
          userModalClick = {this.userModalClick}
          isUserModal = {this.state.isUserModal}
          login={this.state.login}
          register={this.state.register}
          handleLoginChange={this.handleLoginChange}
          handleRegisterChange={this.handleRegisterChange}
          submitLogIn={this.submitLogIn}
          submitSignUp={this.submitSignUp}/>
        <GameModal
          gameModalClick = {this.gameModalClick}
          isGameModal = {this.state.isGameModal}/>
        <Switch>
          <Route path='/about' component={ About }/>
          <Route path='/minesweeper' render={() =>
            <Minesweeper
              board={this.state.board}
              boxClick={this.boxClick}
              score={this.state.score}
              timerClick={this.timerClick}
              win={this.state.win}
              resetGame={this.resetGame}/>}/>
        </Switch>
        <Highscore
          userLog={this.state.login.username}
          userReg={this.state.register.username}/>
        <Footer />
      </div>
    );
  }
}

export default App;
