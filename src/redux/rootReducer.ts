import { combineReducers } from "redux";
import { homeReducer } from "./Home/FetchReducer";

export const rootReducer = combineReducers({
  homeReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
