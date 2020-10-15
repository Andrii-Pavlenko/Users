import { combineReducers } from "redux";
import loading from "./loading";
import fromCurrentUser from "./fromCurrentUser";

export default combineReducers({
  loading,
  fromCurrentUser
});
