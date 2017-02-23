import React, { Component } from 'react'
import { Link } from 'react-router'
import Button from './Button'


export default class SearchArtist extends Component {
constructor(props) {
  super(props)
  this.state = {
    draftMessage: '',
  }
  this.handleSearch = this.handleSearch.bind(this)
  this.handleClick = this.handleClick.bind(this)
}

  handleSearch(e) {
    this.setState({draftMessage: e.target.value})
      // this.props.fetchArtist(this.state.draftMessage)
  }

  handleClick() {
    this.props.fetchArtist(this.state.draftMessage)
    this.setState({draftMessage: ''})
  }

  loadArtists() {
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
        <form>
          <input
            className='search-input'
            placeholder='search artists'
            onChange={this.handleSearch}
            value={this.state.draftMessage}
          />
        <Button
          text='click to jam'
          onClick={this.handleClick}
          className='submitBtn'
        />
          <ul>
            {this.loadArtists()}
          </ul>
      </form>
      </div>
    )
  }
}
