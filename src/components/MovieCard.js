import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: {
      id,
      title,
      storyline,
      imagePath,
    },
    } = this.props;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h1>{ title }</h1>
        <h3>{ storyline }</h3>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
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
