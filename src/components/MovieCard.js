import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id, imagePath } } = this.props;

    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <img src={ imagePath } alt={ title } />
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape,
  title: PropTypes.string,
  storyline: PropTypes.string,
  id: PropTypes.number,
  imagePath: PropTypes.string,
}.isRequired;

export default MovieCard;
