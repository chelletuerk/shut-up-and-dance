import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon'
import * as actions from '../../app/actions/index'



describe('actions', () => {
  it('should create an action to make an array of popular artists', () => {
    const payload = { somejson: 'somejson', somemorejson: 'somemorejson' }
    const query = 'Prince'
    const expectedAction = {
      type: 'SEARCHED_ARTIST',
      query: 'Prince',
      payload: { somejson: 'somejson', somemorejson: 'somemorejson' }
    }
    expect(actions.displaySearchedArtist(query, payload)).to.deep.equal(expectedAction)
  })

  it('should create an action for a user to signIn', () => {
    const email = 'jim@aol.com'
    const password = 'password'
    const user = 'jim'
    const expectedAction = {
      type: 'SIGN_IN',
      email: 'jim@aol.com',
      password: 'password',
      user: 'jim',
    }
    expect(actions.signIn(email, password, user)).to.deep.equal(expectedAction)
  })

  it('should create an action to set the artist id', () => {
    const payload = { somejson: 'somejson', somemorejson: 'somemorejson' }
    const query = 'Run DMC'
    const expectedAction = {
      type: 'SET_ARTIST_ID',
      query: 'Run DMC',
      payload: { somejson: 'somejson', somemorejson: 'somemorejson' }
    }
    expect(actions.setArtistId(query, payload)).to.deep.equal(expectedAction)
  })

  // it('should create an action to set artist uri', () => {
  //   const payload = { somejson: 'somejson', somemorejson: 'somemorejson' }
  //   const expectedAction = {
  //     type: 'SET_ARTIST_URI',
  //     payload: { somejson: 'somejson', somemorejson: 'somemorejson' }
  //   }
  //   expect(actions.displaySearchedArtist(payload)).to.deep.equal(expectedAction)
  // })

  it('should create an action for a user to display 1 popular artist', () => {
    const payload = { somejson: 'somejson', somemorejson: 'somemorejson' }
    const query = 'Daft Punk'
    const expectedAction = {
      type: 'SEARCHED_ARTIST',
      query: 'Daft Punk',
      payload: { somejson: 'somejson', somemorejson: 'somemorejson' }
    }
    expect(actions.displaySearchedArtist(query, payload)).to.deep.equal(expectedAction)
  })
})
