import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie:
      {
        id, imagePath, title, storyline,
      },
    } = this.props;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h1>{ title }</h1>
        <h4>{ storyline }</h4>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

const { shape, string } = PropTypes;

MovieCard.propTypes = {
  movie: shape({
    title: string,
  }),
}.isRequired;

export default MovieCard;
