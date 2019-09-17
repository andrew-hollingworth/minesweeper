import React, { Component } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { login, register } from './services/api-helper'
import Signup from './components/Signup'
import Footer from './components/Footer'
import About from './components/About'
import Minesweeper from './components/Minesweeper'

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
      board: [
          {
            isBomb: false,
            isRevealed: false,
            neighborBombs: 1,
            x: 0,
            y: 0,
          }, {
            isBomb: true,
            isRevealed: false,
            neighborBombs: 0,
            x: 1,
            y: 0,
          }, {
            isBomb: false,
            isRevealed: false,
            neighborBombs: 1,
            x: 2,
            y: 0,
          },
      ]
    }
  }

  boxClick = (e) => {
    console.log('this is boxclick, e, e.target', e, e.target);
  }

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

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Arcade!</h1>
        <BrowserRouter>
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
            <Route exact path='/'
              render={() =>
                <Minesweeper
                  boxClick={this.boxClick}
                  board={this.state.board}/>}/>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
