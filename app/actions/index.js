export const storeArtist = (query, payload) => {
  return {
    type: 'SEARCHED_ARTIST',
    query,
    payload,
  }
}

export const signIn = (email, password, user) => {
  return {
    type: 'SIGN_IN',
    email,
    password,
    user,
  }
}

 export const fetchArtist = (query) => {
  const baseUrl = 'https://api.spotify.com/'
  const search = `v1/search?q=%20artist:${query}&type=album`
  return (dispatch) => {
    fetch(`${baseUrl}${search}`)
      .then(response => response.json())
      .then((json) => {
        dispatch(storeArtist(query, json))
        console.log(json);
      })
      .catch(err => 'err')
  }
}
