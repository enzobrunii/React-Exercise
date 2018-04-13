import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import { fetchingTypes, filterTypes } from "../actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let mockdata = [
    {"name": "Romelu Lukaku", "position": "Centre-Forward"},
    {"name": "David de Gea", "position": "Keeper"}
  ];
  it('creates FETCHING_SUCCESS when fetching players has been done', () => {
    fetch.once(JSON.stringify(mockdata))

    const expectedActions = [
      { type: fetchingTypes.FETCHING_PLAYERS },
      { type: fetchingTypes.FETCHING_SUCCESS, data: mockdata }
    ];
    const store = mockStore({ store: [] });

    return store.dispatch(actions.fetchingPlayers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('filter actions', () => {
  it('should create an action to search by keywords', () => {
    const keywords = 'any keywords';
    const expectedAction = {
      type: filterTypes.SEARCH_KEYWORDS,
      keywords
    };
    expect(actions.onFilteredByKeywords(keywords)).toEqual(expectedAction);
  });
  it('should create an action to search by age', () => {
    const age = 25;
    const expectedAction = {
      type: filterTypes.SEARCH_AGE,
      age
    };
    expect(actions.onFilteredByAge(age)).toEqual(expectedAction);
  });
  it('should create an action to search by age', () => {
    const position = 'Central Midfield';
    const expectedAction = {
      type: filterTypes.SEARCH_POSITION,
      position
    };
    expect(actions.onFilteredByPosition(position)).toEqual(expectedAction);
  });
});
