import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath } = movie;
    return (
      <div className="movie-card">
        <div className="movie-card-subtitle" data-testid="movie-card">
          <img alt="Movie Cover" src={ `../${imagePath}` } width="300px" />
          <h4>{ title }</h4>
          <p>{ storyline }</p>
          <Link to={ { pathname: `movies/${id}` } }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
  }),
}.isRequired;
export default MovieCard;
