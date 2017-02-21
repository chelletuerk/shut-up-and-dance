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

  searchArtists() {
      if (this.props.artists.searchedArtists) {
        return this.props.artists.searchedArtists.map((artist, i) => {
          return (
              artist.images[0] === null) ? null : <li
                className='card'
                key={i}>
                  <img src={`${artist.images[0].url}`} />
                </li>
        })
      }
    }

  render() {
    const { fetchArtist, artists } = this.props
    return (
      <div className='search-input'>
        <input
          placeholder='search artists'
          onChange={this.handleSearch}
          value={this.state.draftMessage}
        />
        <ul>
          {this.searchArtists()}
        </ul>
      </div>
    )
  }
}
