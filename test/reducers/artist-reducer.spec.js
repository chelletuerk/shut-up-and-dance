// import { expect, assert } from 'chai'
// import artist from '../../app/reducers/artist-reducer'
//
// describe('artist reducer', () => {
//   it('should return the initial state', () => {
//     expect(artist(undefined, {})).to.deep.equal({})
//   });
//
//   it('SEARCHED_ARTIST should change the initial state', () => {
//     const action = {
//       type: 'SEARCHED_ARTIST',
//       payload: { results: ['artist1', 'artist2', 'artist3'] },
//     }
//     expect(artist('', action)).to.deep.equal({ popularMovies: ['artist1', 'artist2', 'artist3'] })
//   });
//
//   it('SEARCHED_ARTIST should change the initial state', () => {
//     const action = {
//       type: 'SEARCHED_ARTIST',
//
//       payload: { results: ['artist1', 'artist2', 'artist3'] },
//     }
//     expect(artist(undefined, action)).to.deep.equal({ searchedArtists: ['artist1', 'artist2', 'artist3'] })
//   });
//
//   it('SET_ARTIST_ID should change the initial state', () => {
//     const action = {
//       type: 'SET_ARTIST_ID',
//       artist: { id: ['id1', 'id2', 'id3'] },
//     }
//     expect(artist(undefined, action)).to.deep.equal({ searchedArtists: ['artist1', 'artist2', 'artist3'] })
//   });
// });
