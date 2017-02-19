import React, { Component } from 'react'
import { Link } from 'react-router'

export default class SearchArtist extends Component {

  componentDidMount() {
    this.props.fetchArtist()
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}
