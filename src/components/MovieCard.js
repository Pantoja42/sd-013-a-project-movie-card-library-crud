import React from 'react';
const { movie } = this.props;
const { id, title, storyline, imagePath } = movie;

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
        <p>{title}</p>
        <p>{storyline}</p>
        <img src={ imagePath } alt={ `Capa do filme: ${title}` } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
