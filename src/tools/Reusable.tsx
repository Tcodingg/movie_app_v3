import { movieData } from "../redux/Home/actionTypes";

interface props {
  movies: movieData[];
  title: string;
}
const images = "https://image.tmdb.org/t/p/w500";

export const Reusable: React.FC<props> = ({ movies, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.id.toString()}>
            <img src={`${images}${movie.poster_path}`} alt="poster" />
          </div>
        );
      })}
    </div>
  );
};
