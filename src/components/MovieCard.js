import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath } = movie;

    return (
      <div data-testid="movie-card">
        <p>{ title }</p>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
        <img src={ imagePath } alt={ `Imagem do ${title}` } />
      </div>
    );
  }
}

export default MovieCard;
