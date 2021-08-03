import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath } = movie;

    return (
      <div className="movie-card" data-testid="movie-card">
        <div>
          <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
          <h4 data-testid="movie-card-title">{title}</h4>
          <p>{ storyline }</p>
        </div>
        <nav>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </nav>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
