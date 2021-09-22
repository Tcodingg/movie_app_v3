import { Actions, actionTypes, movieData } from "./actionTypes";

interface interfaceState {
  loading: boolean;
  movies: movieData[];
  err?: string;
}

let initialState: interfaceState = {
  loading: false,
  movies: [],
};

export const FetchReducer = (
  state: interfaceState = initialState,
  action: Actions
) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_LOADING:
      return {
        loading: true,
        movies: [],
      };
    case actionTypes.FETCH_MOVIE_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      };
    case actionTypes.FETCH_MOVIE_FAIL:
      return {
        loading: false,
        movies: [],
        err: action.payload,
      };
  }
};
