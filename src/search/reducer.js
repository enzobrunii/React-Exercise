import { fetchingTypes, filterTypes } from "./actionTypes";

const initialState = {
  footballPlayers: [],
  filters: {
    searchkeywords: '',
    searchAge: 18,
    searchPosition: 'default',
    filterBy: 'SHOW_ALL'
  },
  loading: true,
  error: false
}

export default function (state = initialState, action) {
  switch (action.type) {

    case fetchingTypes.FETCHING_PLAYERS:
      return initialState;

    case fetchingTypes.FETCHING_SUCCESS:
      return {
        ...state,
        footballPlayers: action.data,
        loading: false,
        error: false
      };

    case fetchingTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    case filterTypes.SEARCH_KEYWORDS:
      return {
        ...state,
        filters: Object.assign({}, initialState.filters, {
          ...state.filters,
          searchkeywords: action.keywords,
          filterBy: 'FILTERED_BY_KEYWORDS'
        })
      };

    case filterTypes.SEARCH_AGE:
      return {
        ...state,
        filters: Object.assign({}, initialState.filters, {
          ...state.filters,
          searchAge: action.age,
          filterBy: 'FILTERED_BY_AGE'
        })
      };

    case filterTypes.SEARCH_POSITION:
    return {
      ...state,
      filters: Object.assign({}, initialState.filters, {
        ...state.filters,
        searchPosition: action.position,
        filterBy: 'FILTERED_BY_POSITION'
      })
    };

    case filterTypes.RESET_FILTERS :
      return{
        ...state,
        filters: {
          searchkeywords: '',
          searchAge: 18,
          searchPosition: 'default',
          filterBy: 'SHOW_ALL'
        }
      };

    default:
      return state

  }
}
