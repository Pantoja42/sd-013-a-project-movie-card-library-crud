import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, id, storyline } = movie;
    return (
      <div data-testid="movie-card">
        <span>{title}</span>
        <span>{storyline}</span>
        <span>{id}</span>
        <Link to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string,
    id: Proptypes.number,
    storyline: Proptypes.string,
  }).isRequired,
};

export default MovieCard;
