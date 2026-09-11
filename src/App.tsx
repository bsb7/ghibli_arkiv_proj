import { movies } from "./data/movies.ts";
function App() {
  return (
    <>
      <h1>Ghilbi Arkiv</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2rem" }}>
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </>
  );
}

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "2rem",
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
      }}
      key={movie.id}
    >
      <img src={movie.image} alt="poster image" height={200} />
      <h1>{movie.title}</h1>
    </div>
  );
};
export default App;
