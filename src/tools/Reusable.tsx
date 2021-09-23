import { movieData } from "../redux/Home/actionTypes";
import "./reusable.css";
import { Link } from "react-router-dom";
interface props {
  movies: movieData[];
  category: string;
}
const images = "https://image.tmdb.org/t/p/w500";

export const Reusable: React.FC<props> = ({ movies, category }) => {
  return (
    <div className="poster-container">
      <h1 className="category">{category}</h1>
      <div className="poster-wrapper">
        {movies.map((movie) => {
          return (
            <Link to="/" className="poster" key={movie.id.toString()}>
              <img src={`${images}${movie.poster_path}`} alt="poster" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
