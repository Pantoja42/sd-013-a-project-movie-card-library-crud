import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title } } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
