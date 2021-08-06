import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={ '/movies/${id}' }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
