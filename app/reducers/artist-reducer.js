const artists = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCHED_ARTIST':
      return Object.assign({}, state, {
        searchedArtists: action.payload.albums.items,
        artistId: action.payload.albums.items[0].id })
    default:
      return state;
    }
  }

export default artists
