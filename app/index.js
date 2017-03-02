import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import App from './components/App'
import LoginContainer from './containers/LoginContainer'
import SearchArtistContainer from './containers/SearchArtistContainer'

import './styles/main'

import artists from './reducers/artist-reducer'
import user from './reducers/user-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ artists, user }),
  {
    user: {},
    artists: {
      searchedArtists: [],
      artistId: null,
      artistUri: [],
      topTracks: [],
    },
  },
  composeEnhancers(applyMiddleware(thunk)),
)

const router = (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={App}>
      <IndexRedirect to='/login' component={LoginContainer} />
        <Route path='/login' component={LoginContainer} />
        <IndexRoute component={SearchArtistContainer} />
        <Route path='/artist' component={SearchArtistContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.querySelector('.application'));
