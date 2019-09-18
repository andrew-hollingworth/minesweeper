import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { login, register } from './services/api-helper'
import { genBoard } from './services/board-helper'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Minesweeper from './components/Minesweeper'
import Signup from './components/Signup'
import Modal from './components/Modal'
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
      isModal: false,
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
  boxClick = (x, y) => {
    console.log(x);
    console.log(y);
  }

  buildBoard = async () => {
    const board = await genBoard(10, 9, 9);
    await this.setState({ board })
  }

  componentDidMount() {
    this.buildBoard();
  }

  modalClick = () => {
    this.setState(prevState => ({
      isModal: !prevState.isModal
    }))
  }

  render() {
    return (
      <div className="App">
        <Modal
        modalClick = {this.modalClick}
        isModal = {this.state.isModal}
        login={this.state.login}
        register={this.state.register}
        handleLoginChange={this.handleLoginChange}
        handleRegisterChange={this.handleRegisterChange}
        submitLogIn={this.submitLogIn}
        submitSignUp={this.submitSignUp}
        />
        <Header />
          <Switch>
            <Route path='/about' component={ About }/>
            {/* <Route path='/auth' render={() =>
              <Signup
                login={this.state.login}
                register={this.state.register}
                handleLoginChange={this.handleLoginChange}
                handleRegisterChange={this.handleRegisterChange}
                submitLogIn={this.submitLogIn}
                submitSignUp={this.submitSignUp}/>} /> */}
            <Route exact path='/'
              render={() =>
                <Minesweeper
                  board={this.state.board}
                  boxClick={this.boxClick}/>}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
