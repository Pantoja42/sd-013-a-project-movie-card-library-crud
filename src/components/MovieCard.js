import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {movie: {title, storyline, imagePath}} = this.props
    return (
      <div data-testid="movie-card">
        <h3>{title}</h3>
        <img src={imagePath} alt={title} />
        <p>{storyline}</p>
        <Link to={`movies/${title}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
