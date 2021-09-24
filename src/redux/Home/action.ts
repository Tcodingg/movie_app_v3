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

    const popular = await axios.get(popularUrl, {
      params: {
        api_key: API_KEY,
      },
    });
    const nowPlaying = await axios.get(nowPlayingUrl, {
      params: {
        api_key: API_KEY,
      },
    });
    dispatch({
      type: actionTypes.FETCH_MOVIE_SUCCESS,
      payload: {
        topRated: topRated.data.results,
        popular: popular.data.results,
        nowPlaying: nowPlaying.data.results,
      },
    });
    // console.log(topRated);
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_MOVIE_FAIL,
      payload: err,
    });
  }
};
