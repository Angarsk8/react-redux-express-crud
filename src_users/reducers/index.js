import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import welcomeItems from "./welcome";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  welcomeItems: welcomeItems,
});
