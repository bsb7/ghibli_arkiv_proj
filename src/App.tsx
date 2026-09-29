import MovieList from "./components/MovieList/MovieList.tsx";
import { movies } from "./data/movies.ts";
function App() {
  return (
    <>
      <h1>Ghilbi Arkiv</h1>
      <MovieList movies={movies} />
    </>
  );
}

export default App;
