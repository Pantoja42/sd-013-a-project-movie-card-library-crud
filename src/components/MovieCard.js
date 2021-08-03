import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // Acessando movie via props
    const { title, storyline, id } = movie; // Desconstruindo exatamente as props que usaremos dentro do return
    return (
      <div data-testid="movie-card">
        <p>{title}</p>
        <p>{storyline}</p>
        <p>{id}</p>
        <Link to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
// An object taking on a particular shape:
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;

// Requisito 3 feito com a ajuda do aluno Pedro Delicolli
