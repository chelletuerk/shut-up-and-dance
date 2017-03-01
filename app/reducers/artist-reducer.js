const artists = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCHED_ARTIST':
      return Object.assign({}, state, {
        searchedArtists: action.payload.artists.items,
      })
    case 'SET_ARTIST_ID':
    return Object.assign({}, state, {
      artistId: action.payload.artists.items[0].id,
    })
    case 'SET_ARTIST_URI':
    console.log(action.payload);
      return Object.assign({}, state, {
        artistUri: action.payload.tracks[0].uri,
      })
    default:
      return state;
    }
  }

export default artists
