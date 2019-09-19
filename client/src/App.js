import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { login, register } from './services/api-helper'
import { genBoard } from './services/board-helper'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Minesweeper from './components/Minesweeper'
import Signup from './components/Signup'
import UserModal from './components/UserModal'
import GameModal from './components/GameModal'
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
      score: 30000,
      timerStatus: false,
      isUserModal: true,
      isGameModal: true,
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

  boxClick = (props, e) => {
    if (this.state.timerStatus === false) {
      this.timerClick();}
    if (e.ctrlKey) {
      this.boxStateFunc(props, `isFlag`)
    } else {
      if (props.board.isBomb) {
        const bombs = this.state.board.filter( element => element.isBomb );
        console.log(bombs);
        bombs.forEach((bomb) => {
          this.boxStateFunc(bomb, `isRevealed`)
        })
        this.timerClick();
      } else {
        // REVEAL THIS Box
        // IF box has no neighboring bombs,
          // THEN

      }
    }
  }

  buildBoard = async () => {
    const board = await genBoard(10, 9, 9);
    await this.setState({ board })
  }

  // ============TIMER/SCORE FUNCTIONS=============== //
  // https://wsvincent.com/react-stopwatch/
  timerClick = () => {
    this.setState(state => {
      if (state.timerStatus) {
        clearInterval(this.timer);
      } else {
        const startTime = this.state.score
        this.timer = setInterval(() => {
          this.setState({ score:  startTime - Date.now()});
        });
      }
      return { timerStatus: !state.timerStatus };
    });
  };
  timerReset = () => {
    this.setState({ score: 30000, timerStatus: false });
  };

  componentDidMount() {
    this.buildBoard();
  }

  render() {
    return (
      <div className="App">
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
        <Header
          userModalClick = {this.userModalClick}
          gameModalClick = {this.gameModalClick}/>
        <Switch>
          <Route path='/about' component={ About }/>
          <Route path='/minesweeper' render={() =>
            <Minesweeper
              board={this.state.board}
              boxClick={this.boxClick}
              score={this.state.score}
              timerClick={this.timerClick}
              timerReset={this.timerReset}/>}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
