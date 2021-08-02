import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, subtitle, storyline } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
