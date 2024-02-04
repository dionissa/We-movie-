import { PropTypes } from 'prop-types';

function MovieList(props) {
    {props.array}
}

MovieList.propTypes = {
    array: PropTypes.instanceOf(Array).isRequired,
}

export default MovieList