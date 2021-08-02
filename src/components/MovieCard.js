import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {movie:{id, title, storyline}} = this.props;
    
    return (
      <div data-testid="movie-card">
        Movie Card
        <h2>{title}</h2>{/* titulo */}
        <h3>{storyline}</h3>{/* sinopse */} 
        <Link to={`/movies/${id}`}> VER DETALHES </Link>
      </div>
    );
  }
}

export default MovieCard;
