import { TEXT_ACTIONS } from "../actionNames";

export function setLoadingError(error) {
  return {
    type: TEXT_ACTIONS.SET_LOADING_ERROR,
    payload: error,
  };
}

export function setLoading(loading) {
  return {
    type: TEXT_ACTIONS.SET_LOADING,
    payload: loading,
  };
}


