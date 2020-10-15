import { TEXT_ACTIONS } from "../actionNames";
import { initialState } from "../initialSates/loading";

export default function loading(state = initialState, action) {
  switch (action.type) {
    case TEXT_ACTIONS.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case TEXT_ACTIONS.SET_LOADING_ERROR:
      return {
        ...state,
        loadingError: action.payload,
      };

    case TEXT_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}
