import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedMovies, setFetchedMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    setFetchedMovies(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // useEffect(() => {
  //   fetchedMovies.length !== 0 && console.log(fetchedMovies);
  // }, [fetchedMovies]);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {fetchedMovies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              back={movie.background_image_original}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default App;
