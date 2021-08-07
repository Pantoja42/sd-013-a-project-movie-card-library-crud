import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline } = movie;

    return (
      <div data-testid="movie-card">
        <h4>{ title }</h4>
        <p>{ storyline }</p>
        <Link to={ { pathname: `movies/${id}` } }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
