// import React from 'react'
// import { shallow, mount } from 'enzyme'
// import { expect, assert } from 'chai'
// import sinon from 'sinon'
// import configureMockStore from 'redux-mock-store';
// import { Provider } from 'react-redux';
//
// import * as actions from '../../app/actions/index'
// import SearchArtistContainer, { mapStateToProps } from '../../app/containers/SearchArtistContainer'
//
//
// const fakeStore = configureMockStore()({ artists: [] })
//
// const setup = () => {
//   const props = {
//     handleSubmit: jest.fn(),
//   }
//
//   const wrapper = mount(
//     <Provider store={fakeStore}>
//     <SearchArtistContainer {...props}/>
//     </Provider>
//
//     <SearchArtistContainer handleSubmit={props.handleSubmit} artists={props.artists} />
//   )
//
//   const Component = wrapper.find(MovieIndex)
//
//   return {
//     props,
//     Component
//   }
// }
//
// describe('components', () => {
//   describe('SearchArtistContainer', () => {
//     it.skip('map state to props', () => {
//       const wrapper = mount(<SearchArtistContainer />)
//       assert.isFunction(mapStateToProps);
//     });
//
//     it.skip('should call handleSearch when a user types in the input', () => {
//         const { props, Component } = setup()
//         let input = Component.find('input')
//         form.simulate('change')
//         expect(props.handleSearch).toBeCalled('handleSearch')
//   });
// });
