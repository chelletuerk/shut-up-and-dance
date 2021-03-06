export const signIn = (email, password, user) => {
  return {
    type: 'SIGN_IN',
    email,
    password,
    user,
  }
}

export const displaySearchedArtist = (query, payload) => {
  return {
    type: 'SEARCHED_ARTIST',
    query,
    payload,
  }
}

export const setArtistId = (query, payload) => {
  return {
    type: 'SET_ARTIST_ID',
    query,
    payload,
  }
}

export const setArtistUri = (payload) => {
  return {
    type: 'SET_ARTIST_URI',
    payload,
  }
}

 export const fetchArtist = (query) => {
  const baseUrl = 'https://api.spotify.com/'
  const search = `v1/search?q=${query}&type=artist&limit=1`
  return (dispatch) => {
    const headers = {'Authorization': 'Bearer ' + window.spotifyAccessToken }
    fetch(`${baseUrl}${search}`, {headers})
      .then(response => response.json())
      .then((json) => {
        dispatch(displaySearchedArtist(query, json))
        dispatch(setArtistId(query, json))
      })
      .catch(err => 'err')
  }
}

 export const fetchTopTracks = (artistId) => {
  const baseUrl = 'https://api.spotify.com/'
	 const topTracks = `v1/artists/${artistId}/top-tracks?country=US`
  return (dispatch) => {
    const headers = {'Authorization': 'Bearer ' + window.spotifyAccessToken }
    return fetch(`${baseUrl}${topTracks}`, {headers})
      .then(response => response.json())
      .then((json) => {
        // dispatch(topTracks(json))
        dispatch(setArtistUri(json))
          // dispatch(displaySearchedArtist(query, json))
      })
      .catch(err => 'err')
  }
}
