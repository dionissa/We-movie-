import { useState } from 'react';
import './Header.css';
import genres from "../Genres/index";

function Header({ onGenreChange }) {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
    onGenreChange(genreId);
  };

  return (
    <header className="header">
      <img src="./dioflix.png" alt="Logo" className="logo" />
      <div className='buttons'>
        <div className="dropdown" id="genreDropdown">
          <button className="dropdown-button">Select Genre</button>
          <div className="dropdown-content">
            {genres.map((genre) => (
              <a key={genre.id} onClick={() => handleGenreClick(genre.id)}>
                {genre.name}
              </a>
            ))}
          </div>
        </div>
        <button className="reset-button" onClick={() => handleGenreClick(null)}>
          Reset
        </button>
      </div>
    </header>
  );
}

export default Header;
