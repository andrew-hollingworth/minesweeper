import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { login, register } from './services/api-helper'
import { genBoard } from './services/board-helper'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Minesweeper from './components/Minesweeper'
import Signup from './components/Signup'
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

// ============BOX FUNCTIONS=============== //
// https://stackoverflow.com/questions/38974744/how-to-detect-click-shift-ctrl-alt-in-reactjs-click-event
  boxClick = (props, e) => {
    e.stopPropagation();
    if (this.state.timerStatus === false) {
      this.timerClick()
    }
    if (e.ctrlKey) {
      console.debug("Place a flag", props);
    }
    if (props.board.isBomb) {
      this.timerClick();
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
        const startTime = Date.now() - this.state.score;
        this.timer = setInterval(() => {
          this.setState({ score: Date.now() - startTime });
        });
      }
      return { timerStatus: !state.timerStatus };
    });
  };
  timerReset = () => {
    this.setState({ score: 0, timerStatus: false });
  };

  componentDidMount() {
    this.buildBoard();
  }

  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route path='/about' component={ About }/>
            <Route path='/auth' render={() =>
              <Signup
                login={this.state.login}
                register={this.state.register}
                handleLoginChange={this.handleLoginChange}
                handleRegisterChange={this.handleRegisterChange}
                submitLogIn={this.submitLogIn}
                submitSignUp={this.submitSignUp}/>} />
            <Route exact path='/' render={() =>
              <Minesweeper
                board={this.state.board}
                boxClick={this.boxClick}
                score={this.state.score}
                timerStatus={this.state.timerStatus}
                timerClick={this.timerClick}
                timerReset={this.timerReset}/>}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
