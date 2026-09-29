import type { MovieCardProps } from "./MovieCardTypes";

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "2rem",
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={movie.image} alt="poster image" height={200} />
      <h1>{movie.title}</h1>
      <p>{movie.releaseDate}</p>
      <p>{movie.director}</p>
    </div>
  );
};

export default MovieCard;
