function filterGenres(movies, selectedGenre) {
    if (!selectedGenre) {
      return movies;
    }
  
    return movies.filter((movie) => movie.genre_ids.includes(selectedGenre));
  }
  
  export default filterGenres;  