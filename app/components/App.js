import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {

  logout() {
    window.spotifyAccessToken = null;
    fetch('/api/logout', {method: 'POST'}).then((response)=>{
      console.log(response);
    }).catch((err) => {
      console.log('error', err);
    })
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Link to='/'><button className='logout' onClick={this.logout.bind(this)}>Logout</button></Link>
        <Link to="/" style={{ textDecoration: 'none' }}><h1 className='header-title'>ShutUp&Dance</h1></Link>
        {this.props.children}
      </div>
    )
  }
}
