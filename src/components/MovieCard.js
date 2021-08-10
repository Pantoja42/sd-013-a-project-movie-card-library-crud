import React from 'react';
import { Link } from 'react-router-dom';
import { MovieDetails } from '../pages';

class MovieCard extends React.Component {
  render() {
    const {movie: {title, storyline, imagePath, id}} = this.props
    return (
      <div data-testid="movie-card">
        <h3>{title}</h3>
        <img src={imagePath} alt={title} />
        <p>{storyline}</p>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
