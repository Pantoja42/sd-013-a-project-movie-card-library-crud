import React from 'react';
import { Link } from 'react-router-dom';


class MovieCard extends React.Component {
  render() {
    const { movie:
      { 
        id,
        imagePath,
        title, 
        storyline,
      }
    } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h1>{ title }</h1>
        <h4>{ storyline }</h4>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
