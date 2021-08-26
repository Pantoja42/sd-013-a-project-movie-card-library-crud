import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, genre, rating, storyline, id } = movie;

    return (
      <div data-testid="movie-card">
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ genre }</p>
        <p>{ rating }</p>
        <p>{ storyline }</p>
        <img src={ imagePath } alt={ title } />
        <Link to={ `movies/${id}` }>
          VER DETALHES
        </Link>
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
