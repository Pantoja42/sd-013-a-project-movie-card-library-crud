import React from 'react';
import { Link } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        <p>{title}</p>
        <p>{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
