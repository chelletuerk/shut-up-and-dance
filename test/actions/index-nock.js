import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'
import * as actions from '../../app/actions/index'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.clearAll()
  })

  it('should create an action to fetch current location weather', () => {
    nock('https://api.spotify.com/v1/artists/1ZwdS5xdxEREPySFridCfh/top-tracks?country=US')
      .get('/30,30.json')
      .reply(200, { city: 'Denver' })

    const artistUri = {
      city: 'Denver',
    }
    const track = {
      coords: {
        latitude: 30,
        longitude: 30,
      },
    }
    const expectedAction = {
      type: 'SET_ARTIST_URI',
      payload,
    }

    const store = mockStore({ artistUri: [] })

    return store.dispatch(actions.fetchTopTracks(track)).then(() => {
        expect(store.getActions()).toEqual(expectedAction)
    })
  })
})
