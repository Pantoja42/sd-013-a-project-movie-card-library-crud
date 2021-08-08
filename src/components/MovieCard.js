import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card">
        {/* Movie Card */}
        <p>{ movie.title }</p>
        <p>{ movie.storyline }</p>
        <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   movie: PropTypes
// }

export default MovieCard;

// Na linha 13: O que você colocar no lugar do ':id' é o que importa. Exemplo: Se você colocar '2' o path vai ser '/movies/2'.
