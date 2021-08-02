import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const {
      movie: { id, title, subtitle, storyline, imagePath, rating },
    } = this.props;

    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ imagePath } alt={ title } className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <footer>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </footer>
        {/* <Rating rating={ rating } /> */}
      </div>
    );
    // return <h1>Card</h1>;
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
