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
  const search = `v1/search?q=%20artist:${query}&type=album`
  // const search = `v1/audio-features/6OFysn48qBOIID3CWcxzfJ/1ae09ed5e49048418adb956e9bc202a4`
  return (dispatch) => {
    fetch(`${baseUrl}${search}`)
      .then(response => response.json())
      .then((json) => {
        dispatch(displaySearchedArtist(query, json))
        console.log(json);
        // debugger
      })
      .catch(err => 'err')
  }
}
