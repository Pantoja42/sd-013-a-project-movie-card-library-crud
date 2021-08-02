import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id} } = this.props;
    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <p>{storyline}</p>
        <Link to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default MovieCard;
