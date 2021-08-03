import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ movie.imagePath } alt={ movie.name } />
        <h2>{ movie.title }</h2>
        <p>{ movie.storyline }</p>
        <Link to={ `movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
