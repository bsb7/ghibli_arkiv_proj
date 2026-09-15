import MovieCard from "../MovieCard/MovieCard";
import type { MovieListProps } from "../MovieCard/MovieCardTypes";

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2rem" }}>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
