type Movie = {
  id: string;
  title: string;
  originalTitle: string;
  originalTitleRomanised: string;
  description: string;
  director: string;
  producer: string;
  releaseDate: string;
  runningTime: string;
  rtScore: string;
  image: string;
};

export type MovieListProps = {
  movies: Movie[];
};

export type MovieCardProps = {
  movie: Movie;
};
