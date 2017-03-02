import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import App from '../../app/components/App'

describe('App', () => {
  it('should show title "ShutUp&Dance"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).to.equal('ShutUp&Dance');
  });
  // it('should have a home Link in the header', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('Link').props('to')).to.deep.equal('/');
  // });
})
