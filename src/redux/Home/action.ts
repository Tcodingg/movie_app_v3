import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes } from "./actionTypes";
import { topRatedUrl, popularUrl, nowPlayingUrl, API_KEY } from "../url";

export const fetchMovies = () => async (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.FETCH_MOVIE_LOADING });
  try {
    const topRated = await axios.get(topRatedUrl, {
      params: {
        api_key: API_KEY,
      },
    });
    dispatch({
      type: actionTypes.FETCH_MOVIE_SUCCESS,
      payload: { topRated: topRated.data.results },
    });
    // console.log(topRated);
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_MOVIE_FAIL,
      payload: err,
    });
  }
};
