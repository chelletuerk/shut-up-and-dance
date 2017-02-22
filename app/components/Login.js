import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(e) {
    this.setState({ [e.target.id]: e.target.value})
  }

  // handleSubmit(e) {
  //   e.preventDefault()
  //   fetchLogin(email, password)
  //   this.setState({email: '', password: ''})
  // }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit} /> */}
        <input
          className='email'
          placeholder='email'
          id='email'
          onChange={this.updateInput}
          value={this.props.email}
        />
        <input
          className='password'
          placeholder='password'
          id='password'
          onChange={this.updateInput}
          value={this.props.password}
        />
      </div>
    )
  }
}
