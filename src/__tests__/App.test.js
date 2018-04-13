import React from 'react';
import { shallow } from 'enzyme'
import { App } from '../App';

describe('App', () => {
  let wrapper;
  let instance;
  let props;

  beforeEach(() => {
    props = {
      fetchingPlayers: jest.fn(),
      onFilteredByKeywords: jest.fn(),
      onFilteredByAge: jest.fn(),
      onFilteredByPosition: jest.fn(),
      onResetFilters: jest.fn(),
      data: {error: false}
    };
    wrapper = shallow(<App {...props} />);
    instance = wrapper.instance();
  })

  describe('Testing LifeCycle', () => {
    it('Should Call fetchingPlayers on componentWillMount', () => {
      expect(instance.props.fetchingPlayers.mock.calls.length).toBe(1);
    });
    it('Should not call on onRender', () => {
      expect(instance.props.onFilteredByKeywords.mock.calls.length).toBe(0);
      expect(instance.props.onFilteredByAge.mock.calls.length).toBe(0);
      expect(instance.props.onFilteredByPosition.mock.calls.length).toBe(0);
      expect(instance.props.onResetFilters.mock.calls.length).toBe(0);
    });
  });
});
