import React, { Component } from 'react'
import { Link } from 'react-router'

export default class SearchArtist extends Component {
constructor(props) {
  super(props)
  this.state = {
    draftMessage: '',
  }
  this.handleSearch = this.handleSearch.bind(this)
}

  handleSearch(e) {
    this.setState({draftMessage: e.target.value}, () => {
      this.props.fetchArtist(this.state.draftMessage)
    } )

  }

  render() {
    return (
      <div>
        <input
          placeholder='search artists'
          onChange={this.handleSearch}
          value={this.state.draftMessage}
        />
      </div>
    )
  }
}
