import { useState } from 'react';
import Footer from "./components/Footer";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import moviesArray from "./components/Movies";
import Header from "./components/Header";
import FilterGenres from "./components/FilterGenres"; // Import the filtering function

function App() {
  const [filteredMovies, setFilteredMovies] = useState(moviesArray);

  const handleGenreChange = (genreId) => {
    const newFilteredMovies = FilterGenres(moviesArray, genreId);
    setFilteredMovies(newFilteredMovies);
  };

  return (
    <>
      <Header onGenreChange={handleGenreChange} />
      <div className="cards">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div className="movie-card show" key={movie.id}>
              <MovieCard
                id={movie.id}
                img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
                releaseDate={movie.release_date}
                rating={movie.vote_average}
                genres={movie.genre_ids}
              />
            </div>
          ))
        ) : (
          <p>No items found for the selected genre.</p>
        )}
        <MovieList array={filteredMovies} />
      </div>
      <Footer />
    </>
  );
}

export default App;
