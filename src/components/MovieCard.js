import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card">
        <h2>{ movie.title }</h2>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h3>{ movie.storyline }</h3>
        <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
