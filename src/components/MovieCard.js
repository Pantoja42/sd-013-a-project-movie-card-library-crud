import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, id, imagePath } } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
        <img src={ imagePath } alt="Capa do Filme" />
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
