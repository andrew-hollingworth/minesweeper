import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { login, register } from './services/api-helper'
import Signup from './components/Signup'

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
      }
    }
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
        <h1>Welcome to City-Scaper!</h1>
        <Signup
          login={this.state.login}
          register={this.state.register}
          handleLoginChange={this.handleLoginChange}
          handleRegisterChange={this.handleRegisterChange}
          submitLogIn={this.submitLogIn}
          submitSignUp={this.submitSignUp}/>
      </div>
    );
  }
}

export default App;
