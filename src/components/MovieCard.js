import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <h4>{ subtitle }</h4>
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <img src={ imagePath } alt={ title } />
        <br />
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
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
