import { TEXT_ACTIONS } from "../actionNames";
import { setLoading, setLoadingError } from "./loding";
import { loadFollowers } from "./followers";

export function setCurrentUser(user) {
  return {
    type: TEXT_ACTIONS.SET_CURRENT_USER,
    payload: user,
  };
}

export function setName(name) {
  return {
    type: TEXT_ACTIONS.SET_NAME,
    payload: name,
  };
}

export function loadCurrentUser(url) {
  return async (dispatch) => {
    dispatch(setLoadingError(''));
    dispatch(setLoading(true));
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const user = await response.json();
        await dispatch(setCurrentUser(user));
        user.followers_url && await dispatch(loadFollowers(user.followers_url))
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoadingError("Loading current user error!"));
    } finally {
      dispatch(setLoading(false));
    }
  };
}
