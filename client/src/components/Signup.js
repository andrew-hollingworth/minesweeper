import React from 'react'
import './usermodal.css'

function Signup(props) {
  return (
    <React.Fragment>
      <h3 className='login-title'>Login</h3>
      <form className='login-form' onSubmit={props.submitLogIn}>
        <label htmlFor="username">Username:</label>
        <input className='signup-field' type="string" name="username" value={props.login.username} onChange={props.handleLoginChange} />
        <label htmlFor="password">Password:</label>
        <input className='signup-field' type="password" name="password" value={props.login.password} onChange={props.handleLoginChange} />
        <button className='signup-submit' type="submit">Submit!</button>
      </form>
      <h3 className='signup-title'>Sign Up</h3>
      <form className='signup-form' onSubmit={props.submitSignUp}>
        <label htmlFor="email">Email:</label>
        <input className='signup-field' type="string" name="email" value={props.register.email} onChange={props.handleRegisterChange} />
        <label htmlFor="username">Username:</label>
        <input className='signup-field'type="string" name="username" value={props.register.username} onChange={props.handleRegisterChange} />
        <label htmlFor="password">Password:</label>
        <input className='signup-field' type="password" name="password" value={props.register.password} onChange={props.handleRegisterChange} />
        <button className='signup-submit' type="submit">Submit!</button>
      </form>
    </React.Fragment>
  )
}

export default Signup
