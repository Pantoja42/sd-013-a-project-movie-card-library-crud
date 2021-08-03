import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="conteiner">
        <div className="movie-box" data-testid="movie-card">
          <img className="image" src={ movie.imagePath } alt={ movie.title } />
          <h4>{ movie.title }</h4>
          <p>{ movie.storyline}</p>
          <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
