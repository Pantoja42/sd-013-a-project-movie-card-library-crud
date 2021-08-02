import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath } } = this.props;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ imagePath } />
        <h3>{ title }</h3>
        <div>
          <p>{ storyline }</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
