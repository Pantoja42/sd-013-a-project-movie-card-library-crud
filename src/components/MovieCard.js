import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <div>{title}</div>
        <div>{storyline}</div>
        <div><Link to={ `/movies/${id}` }>VER DETALHES</Link></div>
      </div>
    );
  }
}

export default MovieCard;
