import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>{ movie.title }</h2>
        <img alt={ movie.title } src={ movie.imagePath } />
        <p>{ movie.storyline }</p>
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
