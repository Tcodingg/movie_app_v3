import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_KEY, search_movie_url, poster_url } from "../../tools/url";
import { Link } from "react-router-dom";
import "./SearchBar.css";
interface params {
  query: string;
}
const Results: React.FC = () => {
  const { query }: params = useParams();

  const [results, setResults] = useState([]);
  // console.log(query);

  useEffect(() => {
    const getResults = async () => {
      const {
        data: { results },
      } = await axios.get(`${search_movie_url}`, {
        params: {
          api_key: API_KEY,
          query,
        },
      });
      setResults(results.filter((movie: any) => movie.poster_path !== null));
    };
    getResults();
  }, [query]);

  return (
    <section className="results section">
      {results.map((movie: any) => {
        return (
          <Link className="results-poster" to={`/details/${movie.id}`}>
            <img src={`${poster_url}${movie.poster_path}`} alt="" />
          </Link>
        );
      })}
    </section>
  );
};

export default Results;
