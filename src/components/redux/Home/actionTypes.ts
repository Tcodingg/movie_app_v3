export enum actionTypes {
  FETCH_MOVIE_LOADING = "FETCH_MOVIE_LOADING",
  FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS",
  FETCH_MOVIE_FAIL = "FETCH_MOVIE_FAIL",
}

type actionLoad = {
  type: actionTypes.FETCH_MOVIE_LOADING;
};

type actionSuccess = {
  type: actionTypes.FETCH_MOVIE_SUCCESS;
  payload: movieData[];
};

type actionFailure = {
  type: actionTypes.FETCH_MOVIE_FAIL;
  payload: string;
};

export interface movieData {
  id: Number;
  poster_path: string;
}

export type Actions = actionLoad | actionSuccess | actionFailure;
