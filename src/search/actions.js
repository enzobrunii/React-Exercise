import { fetchingTypes } from "./actionTypes";
import { PLAYERS } from "./constants"

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

export const fetchingPlayers = () => {
    return (dispatch) => {
    dispatch(onFetchRequest());
    return fetchPlayers().then(([response, json]) =>{
      if (json.length > 0) {
        dispatch(onFetchSuccess(json));
      } else {
        dispatch(onFetchError());
      }
    });
  }
}

const fetchPlayers = () => {
  return fetch(PLAYERS, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}
