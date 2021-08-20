import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id, imagePath } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } width="160px" />
        <p>{ title }</p>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
        {console.log(this.props)}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.array,
}.isRequired;

export default MovieCard;
