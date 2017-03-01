const playArtist = (state = {}, action) => {
  switch (action.type) {
    case 'PLAY_ARTIST':
      return Object.assign({}, state, {
        fetchTopTracks: action.payload.tracks[0].uri,
      })
    default:
      return state;
    }
  }

export default playArtists
