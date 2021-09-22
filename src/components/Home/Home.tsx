import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/Home/action";
import { RootState } from "../../redux/rootReducer";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.homeReducer.movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  console.log(state);

  return (
    <div>
      {state.topRated.map((movie) => {
        return <h1 key={movie.id.toString()}>{movie.id}</h1>;
      })}
      <h1>Home </h1>
    </div>
  );
};

export default Home;
