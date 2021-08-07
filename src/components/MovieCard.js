import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <h4>{ title }</h4>
        <h5>{ storyline }</h5>
        <Link to={ { pathname: `movies/${id}` } }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    storyline: PropTypes.string,
    title: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
