import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/Home/action";
import { RootState } from "../../redux/rootReducer";
import { Reusable } from "../../tools/Reusable";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state.homeReducer.movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  console.log(state);

  return (
    <div>
      <Reusable movies={state.topRated} title="Top Rated" />
    </div>
  );
};

export default Home;
