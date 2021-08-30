import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, id, storyline } = movie;
    return (
      <div
        data-testid="movie-card"
        className="movie-card"
      >
        <img
          alt="parada"
          src={ imagePath }
          className="mc-image"
        />
        <h2>{ title }</h2>
        <p
          className="card-sinopse"
        >
          { storyline }

        </p>
        <Link
          to={ `movies/${id}` }
          className="links"
        >
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default MovieCard;
