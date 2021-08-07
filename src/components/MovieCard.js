import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline } = movie;

    return (
      <div data-testid="movie-card">
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        <p>{title}</p>
        <p>{storyline}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
