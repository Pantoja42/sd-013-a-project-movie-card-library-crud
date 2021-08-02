import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      id,
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked,
      genre,
    } = movie;
    return (
      <section data-testid="movie-card">
        <h2>{title}</h2>
        {storyline}
        <div>{subtitle}</div>
        <div>{rating}</div>
        <img src={ imagePath } alt="" />
        <div>{bookmarked && 'Favoritado'}</div>
        <div>{genre}</div>
        <article>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </article>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
