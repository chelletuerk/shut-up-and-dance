import { connect } from 'react-redux'
import { fetchArtist, fetchTopTracks } from '../actions'
import SearchArtist from '../components/SearchArtist'

const mapStateToProps = (state) => {
  return { artists: state.artists }
}

const mapDispatchToProps = {
  fetchArtist,
  fetchTopTracks,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchArtist)
