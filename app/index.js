import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import App from './components/App'
import SearchArtistContainer from './containers/SearchArtistContainer'
import './styles/main'

import artists from './reducers/artist-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ artists }),
  {
    artists: {
      searchedArtists: [],
    },
  },
  composeEnhancers(applyMiddleware(thunk)),
)

const router = (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={App}>
      <IndexRedirect to='/artist' component={SearchArtistContainer} />
        <Route path='/artist' component={SearchArtistContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.querySelector('.application'));
