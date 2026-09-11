import { movies } from "./data/movies.ts";
function App() {
  return (
    <>
      <h1>Ghilbi Archiv</h1>
      {movies.map((movie) => (
        <div
          style={{
            border: "1px solid gray",
            margin: "2rem",
            padding: "0.5rem",
          }}
          key={movie.id}
        >
          <h2>{movie.title}</h2>
          <p>{movie.releaseDate}</p>
          <p>{movie.director}</p>
        </div>
      ))}
    </>
  );
}

export default App;
