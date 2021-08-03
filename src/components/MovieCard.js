import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, imagePath, title, storyline } } = this.props;

    return (
      <div className="movie-card" data-testid="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h1 className="movie-card-title">{ title }</h1>
        <h4 className="movie-card-storyline">{ storyline }</h4>
        <Link to={ `/movies/${id}` } className="botao">VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
