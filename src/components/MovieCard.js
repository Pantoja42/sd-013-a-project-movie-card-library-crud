import React from 'react';
import { Link } from 'react-router-dom';
import movie from '../propTypes/Movie';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, subtitle, storyline } } = this.props;

    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = movie;

export default MovieCard;
