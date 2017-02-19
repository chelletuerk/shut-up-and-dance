export const storeArtist = (query, payload) => {
  return {
    type: 'SEARCHED_ARTIST',
    query,
    payload,
  }
}

 export const fetchArtist = (query) => {
  const baseUrl = 'https://api.themoviedb.org/3/'
  const search = `search/movie?api_key=5cfdb8d0915ecb8d60d107cef74a22e8&query=${query}`
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
