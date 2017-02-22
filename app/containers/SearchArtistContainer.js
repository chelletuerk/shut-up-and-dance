import { connect } from 'react-redux'
import { fetchArtist } from '../actions'
import SearchArtist from '../components/SearchArtist'

const mapStateToProps = (state) => {
  return { artists: state.artists }
}

const mapDispatchToProps = {
  fetchArtist,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchArtist)
