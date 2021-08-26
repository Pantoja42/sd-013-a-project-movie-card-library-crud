import PropTypes from "prop-types";
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, genre, rating, storyline } = movie;

    return (
      <div data-testid="movie-card">
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ genre }</p>
        <p>{ rating }</p>
        <p>{ storyline }</p>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
