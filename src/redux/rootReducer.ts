import { combineReducers } from "redux";
import { movieReducer } from "./fetchMovie/movieReducer";

export const rootReducer = combineReducers({
  movieReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
