import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import type { MovieListProps, Movie } from "../MovieCard/MovieCardTypes";

// const MovieList = ({ movies }: MovieListProps) => {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2rem" }}>
//       {movies.map((movie) => (
//         <MovieCard movie={movie} key={movie.id} />
//       ))}
//     </div>
//   );
// };

const MovieList = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getMovies() {
      try {
        setLoading(true);
        const response = await fetch("https://ghibliapi.dev/films", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    getMovies();
    return () => {
      controller.abort();
    };
  }, []);
  console.log(movies);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2rem" }}>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
export default MovieList;
