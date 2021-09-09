import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline } } = this.props;

    return (
      <div data-testid="movie-card">
        Movie Card
        <h2>{title}</h2>
        {/* titulo */}
        <h3>{storyline}</h3>
        {/* sinopse */}
        <Link id={ id } to={ `/movies/${id}` }> VER DETALHES </Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};
