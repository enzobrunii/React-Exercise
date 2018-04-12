import { fetchingTypes, filterTypes } from "./actionTypes";
import { PLAYERS_URL } from "./constants"

export const onFetchRequest = () => {
  return {
    type: fetchingTypes.FETCHING_PLAYERS
  };
};

export const onFetchSuccess = (data) => {
  return {
    type: fetchingTypes.FETCHING_SUCCESS,
    data
  };
};

export const onFetchError = () => {
  return {
    type: fetchingTypes.FETCHING_ERROR
  };
};

export const onFilteredByKeywords = (keywords) => {
  return {
    type: filterTypes.SEARCH_KEYWORDS,
    keywords
  }
}

export const onFilteredByAge = (age) => {
  return {
    type: filterTypes.SEARCH_AGE,
    age
  }
}

export const onFilteredByPosition = (position) => {
  return {
    type: filterTypes.SEARCH_POSITION,
    position
  }
}

export const onResetFilters = () => {
  return {
    type: filterTypes.RESET_FILTERS
  }
}

export const fetchingPlayers = () => {
    return (dispatch) => {
    dispatch(onFetchRequest());
    return fetch(PLAYERS_URL, { method: 'GET'})
    .then(response => Promise.all([response, response.json()]))
    .then(([response, json]) => {
      if (json.length > 0) {
        dispatch(onFetchSuccess(json));
      } else {
        dispatch(onFetchError());
      }
    })
    .catch(err => dispatch(onFetchError()));
  }
}
