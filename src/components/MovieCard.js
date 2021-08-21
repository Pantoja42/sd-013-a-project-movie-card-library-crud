import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    // passando o state para variáveis
    const { movie: { id, title, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        {/* 3.2 - link com 'ver detalhes' redirecionando ao filme */}
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}
// fazendo os prop-types
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
