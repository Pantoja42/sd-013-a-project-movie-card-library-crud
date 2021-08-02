import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <p>{storyline}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
