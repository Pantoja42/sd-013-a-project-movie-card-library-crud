import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <span>
          Título:
          <span>
            { title }
          </span>
        </span>
        <span>
          Subtítulo:
          <span>
            { subtitle }
          </span>
        </span>
        <span>
          Enredo:
          <span>
            { storyline }
          </span>
        </span>
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
