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

 export const fetchArtist = (query) => {
  const baseUrl = 'https://api.spotify.com/'
  const search = `v1/search?q=%20artist:${query}&type=track`
  return (dispatch) => {
    const headers = {'Authorization': 'Bearer ' + window.spotifyAccessToken }
    fetch(`${baseUrl}${search}`, {headers})
      .then(response => response.json())
      .then((json) => {
        dispatch(displaySearchedArtist(query, json))
      })
      .catch(err => 'err')
  }
}

//  export const fakeArtist = (query) => {
//   const baseUrl = 'https://api.spotify.com/'
//   const search = `v1/search?q=%20artist:${query}&type=album`
//   // const search = `v1/audio-features/06AKEBrKUckW0KREUWRnvT`
//   return (dispatch) => {
//     // const headers = {'Authorization': 'Bearer ' + window.spotifyAccessToken }
//     fetch(`${baseUrl}${search}`)//, {headers})
//       .then(response => response.json())
//       .then((json) => {
//
//         // console.log('hey', json);
//         dispatch(displaySearchedArtist(query, json))
//         // const artistId = json.body.artistId
//         // fetch(`${baseUrl}${artistId}`)
//         //   .then(=>
//         //     dispatch(displaySearchedArtist(query, json))
//         //   )
//       })
//       .catch(err => 'err')
//   }
// }
