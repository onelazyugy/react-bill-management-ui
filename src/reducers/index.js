import { combineReducers } from "redux";
import billReducer from "./billReducer";

export default combineReducers({
    bills: billReducer
});