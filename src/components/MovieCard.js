import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.func.isRequired,
};

export default MovieCard;
