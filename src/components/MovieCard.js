import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// consulta - Um objeto assumindo uma forma particular - documentation "shape"
// optionalObjectWithShape: PropTypes.shape({
// color: PropTypes.string,
// fontSize: PropTypes.number
// }),

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, storyline, id } = movie;

    return (
      <div data-testid="movie-card" className="movie-card">
        <h2>{ title }</h2>
        <img src={ imagePath } alt={ title } />
        <p>{ storyline }</p>
        <Link className="links" to={ `/movies/${id}` }> VER DETALHES </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
