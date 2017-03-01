import { expect, assert } from 'chai'
import user from '../../app/reducers/user-reducer'

describe('user reducer', () => {
  it('should return state when someone signs in', () => {
    const action = {
      type: 'SIGN_IN',
      password: 'alligator',
      email: 'chelle@gmail.com',
      user: 'chelle',
    }
    expect(user(undefined, action)).to.deep.equal({
      email: 'chelle@gmail.com',
      password: 'alligator',
      user: 'chelle' });
  })
})
