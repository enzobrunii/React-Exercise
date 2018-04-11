import { fetchingTypes } from "./actionTypes";

const initialState = {
  footballPlayers: [],
  loading: true,
  error: false
}

export default function (state = initialState, action) {
  switch (action.type) {

    case fetchingTypes.FETCHING_PLAYERS:
      return initialState;

    case fetchingTypes.FETCHING_SUCCESS:
      return {
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

    default:
      return state

  }
}
