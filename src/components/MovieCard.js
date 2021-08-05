import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    console.log(this.props);
    const { movie: { id, title, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          Movie Card
          <p>{title}</p>
          <p>{storyline}</p>
        </div>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
