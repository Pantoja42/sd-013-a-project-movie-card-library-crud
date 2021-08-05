import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <p>{ movie.title }</p>
        <img src={ movie.imagePath } alt="Capa do Filme" />
        <p>{ movie.storyline }</p>
        <Link to={ `movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

// Apos rever a aula aoVivo 13.02 no minuto 38.25 por algum tempo, consegui resolver esse requisito

MovieCard.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ).isRequired,
};

export default MovieCard;
