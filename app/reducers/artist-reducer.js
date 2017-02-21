const artists = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCHED_ARTIST':
      return Object.assign({}, state, { searchedArtists: action.payload.albums.items })
    default:
      return state;
    }
  }

export default artists
