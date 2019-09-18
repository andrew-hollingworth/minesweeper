import React from 'react'

function Signup(props) {
  return (
    <React.Fragment>
      <h3>Login</h3>
      <form onSubmit={props.submitLogIn}>
        <label htmlFor="username">Username:</label>
        <input type="string" name="username" value={props.login.username} onChange={props.handleLoginChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={props.login.password} onChange={props.handleLoginChange} />
        <button type="submit">Submit!</button>
      </form>
      <h3>Sign Up</h3>
      <form onSubmit={props.submitSignUp}>
        <label htmlFor="email">Email:</label>
        <input type="string" name="email" value={props.register.email} onChange={props.handleRegisterChange} />
        <label htmlFor="username">Username:</label>
        <input type="string" name="username" value={props.register.username} onChange={props.handleRegisterChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={props.register.password} onChange={props.handleRegisterChange} />
        <button type="submit">Submit!</button>
      </form>
    </React.Fragment>
  )
}

export default Signup
