import { TEXT_ACTIONS } from "../actionNames";
import { initialState } from "../initialSates/fromCurrentUser";

export default function fromCurrentUser(state = initialState, action) {
  switch (action.type) {
    case TEXT_ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case TEXT_ACTIONS.SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case TEXT_ACTIONS.SET_FOLLOWERS:
      return {
        ...state,
        followers: action.payload,
      };

    default:
      return state;
  }
}
