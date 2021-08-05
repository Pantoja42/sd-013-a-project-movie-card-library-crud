import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;
    return (
      <div className="movie-card" data-testid="movie-card">
        <p className="page-title">{ title }</p>
        <img src={ imagePath } alt={ title } />
        <p className="movie-card-storyline">{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
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
