import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {

  render() {
    return (
      <div>
        <Link to="/" style={{ textDecoration: 'none' }}><h1 className='header-title'>ShutUp&Dance</h1></Link>
        {this.props.children}
      </div>
    )
  }
}
