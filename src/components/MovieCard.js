import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagepath } = movie;
    return (
      <div data-testid="movie-card">
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
        <p>{ title }</p>
        <img src={ imagepath } alt={ `Capa do filme ${title}` } />
        <p>{ storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
