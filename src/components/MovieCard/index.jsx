import { PropTypes } from 'prop-types';
import genres from "../Genres/index"
import "../MovieCard/styles.css"

function MovieCard(props) {
    const getGenres = () => {
        const genreNames = props.genres.map(genreId => {
          const genre = genres.find(genre => genre.id === genreId);
          return genre ? genre.name : '';
        });
    
        return genreNames.join(', ');
      };

    return (
        <>
             <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className='movie-poster' src={props.img}/>
                </div>
                <div className="flip-card-back">
                  <h2 className='movie-title'>{props.title}</h2>
                  <div className='release-and-rating'>
                  <h3 className='genres'>{getGenres()}</h3>
                    <h3 className='rating'>Rating: {props.rating}⭐</h3>
                    <h4 className='date'>Release Date: {props.releaseDate}</h4>
                 </div>
                </div>
              </div>
            </div> 
            </>
    )
            

}

MovieCard.propTypes = {
    title: PropTypes.string,
    rating:  PropTypes.number,
    id: PropTypes.number,
    img: PropTypes.string,
    releaseDate:  PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.number),
};

export default MovieCard