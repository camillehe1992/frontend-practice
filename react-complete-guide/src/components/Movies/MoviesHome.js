import React, { useState, useEffect } from "react";

import MoviesList from "./MoviesList";
import "./MoviesHome.module.css";
import AddMovie from "./AddMovie";
import useHttp from "../../hooks/use-http";

function MoviesHome() {
  const [movies, setMovies] = useState([]);
  const { isLoading, error, sendRequest: fetchMovies } = useHttp();

  useEffect(() => {
    const transformMovies = (movies) => {
      const loadedMovies = movies.results.map((item) => {
        return {
          id: item.episode_id,
          title: item.title,
          openingText: item.opening_crawl,
          releaseDate: item.release_date,
        };
      });
      setMovies(loadedMovies);
    };
    fetchMovies(
      {
        url: "https://swapi.dev/api/films",
      },
      transformMovies
    );
  }, [fetchMovies]);

  const addMovie = (movie) => {
    setMovies((prev) => prev.concat(movie));
  };

  let content = <p>Found no movies</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovie} />
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default MoviesHome;
