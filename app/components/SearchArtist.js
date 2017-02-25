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
  }

  handleKeyPress(e) {

    if (e.key === 'Enter') {
      e.preventDefault()
      this.handleClick()
    }
    // if event is enter key

  }

  handleClick() {
    this.props.fetchArtist(this.state.draftMessage)
    this.setState({draftMessage: ''})
  }

  loadArtists() {
      if (this.props.artists.searchedArtists) {
        return this.props.artists.searchedArtists.map((artist, i) => {
          return (
              artist.images[0] == null) ? null : <li
                className='card'
                key={i}>
                  <img src={`${artist.images[0].url}`} />
                  <Button
                    onClick={() => this.props.fetchTopTracks(this.props.artistId)}
                    className='playBtn'
                    text='&#9654;'
                  />
                </li>
          })
        }
      }

  render() {
    console.log(this.props);

    const { fetchArtist, artists, fetchTopTracks } = this.props
    return (
      <div className='search-input'>
          <input
            className='search-input'
            placeholder='search artists'
            onChange={this.handleSearch}
            onKeyPress={this.handleKeyPress.bind(this)}
            value={this.state.draftMessage}
          />
        <Button
          text='click for jams'
          onClick={this.handleClick}
          className='submitButton'
        />
          <ul>
            {this.loadArtists(this.props.artistId)}
          </ul>
      </div>
    )
  }
}
