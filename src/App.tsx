import { movies } from "./data/movies.ts";
import MovieCard from "./components/MovieCard/MovieCard.tsx";
function App() {
  return (
    <>
      <h1>Ghilbi Arkiv</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2rem" }}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}

export default App;
