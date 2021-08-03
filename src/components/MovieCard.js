import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      movie: {
        id,
        title,
        subtitle,
        storyline,
        rating,
        imagePath,
        bookmarked,
        genre,
      }
    } = this.props;
    
    return (
      <div data-testid="movie-card">
        <section>
          <img src={ imagePath } alt={ `Filme: ${ title }` } />
          <h1>{ title }</h1>
        </section>
        <section>
          <p>{ storyline }</p>
          <hr />
        </section>
        <section>
          <Link to={`/movies/${id}`} >VER DETALHES</Link>
        </section>
      </div>
    );
  }
}

export default MovieCard;
