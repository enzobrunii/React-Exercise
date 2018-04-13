import React from 'react';
import { shallow } from 'enzyme'
import SearchBar from '../searchBar';

describe('SearchBar', () => {
  let wrapper;
  let instance;
  let mockSearchFn;

  beforeEach(() => {
    mockSearchFn = jest.fn()
    wrapper = shallow(<SearchBar onSearchChange={mockSearchFn} />);
    instance = wrapper.instance();
  })

  describe('Render', () => {
    it("always renders Form", () => {
      const form = wrapper.find("#searchForm");
      expect(form.length).toBe(1);
    });
  });

  describe('innerFunctions', () => {
    it("Should call handleSubmit on SearchBar", () => {
      wrapper.find("#name").simulate('change', {
        target: {name: 'name', value: 'testing'}
      })
      wrapper.find('#searchForm').simulate('submit', {
        preventDefault() {}
      })
      expect(mockSearchFn.mock.calls.length).toBe(1);
    });
  });

});
