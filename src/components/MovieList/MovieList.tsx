import { movies } from "../../data/movies";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2rem" }}>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
