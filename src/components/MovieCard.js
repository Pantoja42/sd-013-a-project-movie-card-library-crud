import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      title,
      imagePath,
      subtitle,
      genre,
      rating,
      id } = movie;

    return (
      <div data-testid="movie-card" className="movie-card">
        <img className="movie_image" src={ imagePath } alt={ title } />
        <h1 className="movie_title">{ title }</h1>
        <h2 className="movie_subtitle">{subtitle}</h2>
        <h4>{genre}</h4>
        <h4>{rating}</h4>
        <div className="verDetalhe">
          <Link to={ `/movies/${id}` }>
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: Proptypes.objectOf({
    title: Proptypes.string,
    imagePath: Proptypes.string,
    subtitle: Proptypes.string,
    storyline: Proptypes.string,
    genre: Proptypes.string,
    rating: Proptypes.number,
    id: Proptypes.number,
  }).isRequired,
};
export default MovieCard;
