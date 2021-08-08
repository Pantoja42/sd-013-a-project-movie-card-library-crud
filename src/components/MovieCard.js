import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card">
        <img src={ movie.imagePath } alt={ movie.title } />
        <p>{ movie.title }</p>
        <p>{ movie.storyline }</p>
        <div className="link">
          <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;

// Na linha 13: O que você colocar no lugar do ':id' é o que importa. Exemplo: Se você colocar '2' o path vai ser '/movies/2'.
