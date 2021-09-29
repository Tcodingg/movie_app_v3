import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/fetchMovie/action";
import { RootState } from "../../redux/rootReducer";
import tv from "../../images/tv.png";
import "./home.css";
import { Reusable } from "../../tools/Reusable";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state.movieReducer.movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <section className="home">
      <div className="home-banner">
        <div className="home-banner-wrapper">
          <div className="home-details">
            <h1>Enjoy Your TV.</h1>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="img-wrapper">
            <img src={tv} alt="" />
          </div>
        </div>
      </div>
      <div className="movies">
        <Reusable movies={state.nowPlaying} category="NOW PLAYING" />
        <Reusable movies={state.topRated} category="TOP RATING" />
        <Reusable movies={state.popular} category="POPULAR" />
      </div>
    </section>
  );
};

export default Home;
