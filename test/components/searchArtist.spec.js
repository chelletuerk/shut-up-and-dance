import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import SearchArtist from '../../app/components/SearchArtist'

describe('SearchArtist', () => {
  const fakeArray = { favorites: [{ key: 'val' }, { twokey: 'twoval' }, { threekey: 'threeval' }] }
  const fakeArtists = { artists: [{ key: 'val' }, { artists: ['movie1', 'movie2', 'movie3'] }, { threekey: 'threeval' }] }
  const fetchData = sinon.spy()
  it('should have a state of draftMessage that is an empty string', () => {
    const wrapper = shallow(<SearchArtist
      artists={fakeArtists} fetchData={fetchData} />)
    expect(wrapper.state().draftMessage).to.deep.equal('');
  });

  it('should render a list of artists on load', () => {
    const wrapper = mount(<SearchArtist
      artists={fakeArtists} fetchData={fetchData} />);
    expect(wrapper.find('li')).to.have.length(3)
  });

  it('should fetch artists from the api on load', () => {
    const wrapper = mount(<SearchArtist
      artists={fakeArtists} fetchData={fetchData}/>)
    assert.equal(fetchData.calledOnce, false);
  });
});
