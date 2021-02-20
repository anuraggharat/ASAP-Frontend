import { combineReducers } from "redux";
import user from "./user";
import healthcare from "./healthcare";

const rootReducer = combineReducers({
  user,
  healthcare,
});

export default rootReducer;
