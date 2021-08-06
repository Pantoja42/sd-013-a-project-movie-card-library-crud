import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath, id } = movie;
    return (
      <div className="movie-card-container" data-testid="movie-card">

        <div className="movie-card">
          <h1 className="movie-title">{title}</h1>
          <h3 className="movie-subtitle">{subtitle}</h3>
          <img src={ imagePath } alt={ title } className="movie-poster" />
          <p className="movie-storyline">{storyline}</p>
          <p className="movie-rating">{rating}</p>
          <Link
            id={ id }
            to={ `/movies/${id}` }
            className="movie-details"
          >
            VER DETALHES
          </Link>
        </div>

      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object).isRequired,
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default MovieCard;
