import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id,
      imagePath,
      storyline,
      title } = movie;
    return (
      <div data-testid="movie-card">
        <h3>{title}</h3>
        <img src={ imagePath } alt={ title } />
        <p>{storyline}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf().isRequired,
};

export default MovieCard;
