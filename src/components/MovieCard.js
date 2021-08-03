import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id } } = this.props;
    console.log(title);
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <p>{storyline}</p>
        <p><Link to={ `movies/${id}` }>VER DETALHES</Link></p>
      </div>
    );
  }
}

export default MovieCard;
