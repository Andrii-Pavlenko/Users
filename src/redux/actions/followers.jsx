import { TEXT_ACTIONS } from "../actionNames";
import { setLoadingError } from "./loding";

export function setFollowers(users) {
  return {
    type: TEXT_ACTIONS.SET_FOLLOWERS,
    payload: users,
  };
}


export function loadFollowers(url) {
  return async (dispatch) => {
    dispatch(setLoadingError(''));
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const users = await response.json();
        dispatch(setFollowers(users));
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoadingError("Loading current user error!"));
    }
  };
}
