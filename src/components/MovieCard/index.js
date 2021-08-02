import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      id,
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked,
      genre,
    } = movie;
    return (
      <section className={ style.card } data-testid="movie-card">
        <h2>
          {title}
        </h2>
        {storyline}
        <div>
          {subtitle}
        </div>
        <article>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </article>
      </section>
    );
  }
}

export default MovieCard;
