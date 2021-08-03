import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, imagePath, storyline } } = this.props;
    return (
      <div
        className="movie-card"
        data-testid="movie-card"
      >
        <img src={ imagePath } alt={ id } />
        <h1>{title}</h1>
        <p>{storyline}</p>

        <Link
          to={ `/movies/${id}` }
        >
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
