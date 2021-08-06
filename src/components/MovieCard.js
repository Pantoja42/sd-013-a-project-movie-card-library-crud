import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, imagePath, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>
          { title }
        </h1>
        <img src={ imagePath } alt={ title } />
        <p>
          { storyline }
        </p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }),
};
MovieCard.defaultProps = {
  movie: {
    title: '',
    subtitle: '',
    imagePath: '',
    storyline: '',
    id: 0,
  },
};

export default MovieCard;
