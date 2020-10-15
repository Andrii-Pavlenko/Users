import { TEXT_ACTIONS } from "../actionNames";
import { setLoading, setLoadingError } from "./loding";
import { ENDPOINTS } from "../../consts";

export function setUsers(users) {
  return {
    type: TEXT_ACTIONS.SET_USERS,
    payload: users,
  };
}

export function loadUsers() {
  return async (dispatch) => {
    dispatch(setLoadingError(''));
    dispatch(setLoading(true));
    try {
      const response = await fetch(ENDPOINTS.GET_USERS);
      if (response.status === 200) {
        const users = await response.json();
        dispatch(setUsers(users));
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoadingError("Loading users error!"));
    } finally {
      dispatch(setLoading(false));
    }
  };
}
