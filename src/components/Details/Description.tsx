import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, movieDataUrl } from "../../tools/url";

interface props {
  id: string;
}
const Description: React.FC<props> = ({ id }) => {
  const [description, setDescription] = useState({
    title: null,
    overview: null,
    genres: [],
    vote_average: null,
  });

  useEffect(() => {
    const getDescription = async () => {
      const {
        data: { title, overview, genres, vote_average },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      setDescription({
        title,
        overview,
        genres,
        vote_average,
      });
    };
    getDescription();
  }, [id]);

  return (
    <div className="description">
      <h1>{description.title}</h1>
      <p>{description.overview}</p>
      <div className="genres">
        <h3>Genres:</h3>
        <div>
          {description.genres.map((i: { name: string }) => (
            <p>{i.name}</p>
          ))}
        </div>
      </div>
      <div className="rating-container">
        <h3> Rating: </h3>
        <p> {Number(description.vote_average).toFixed(2)} </p>
      </div>
    </div>
  );
};

export default Description;
