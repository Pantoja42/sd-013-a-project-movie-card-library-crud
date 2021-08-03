import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <p>
          Title:
          {' '}
          <span>{ title }</span>
        </p>
        <p>
          Subtitle:
          {' '}
          <span>{ subtitle }</span>
        </p>
        <p>
          Storyline:
          {' '}
          <span>{ storyline }</span>
        </p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
