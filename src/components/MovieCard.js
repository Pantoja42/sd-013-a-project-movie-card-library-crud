import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline } = movie;
    return (
      <div data-testid="movie-card">
        Movie Card
        <p>{ title }</p>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieCard;

// 1 passo - Fiz a desconstrução de movie para obter o id, title e storyline.
// 2 passo - Utilizei estes dados descontruídos no return do render, conforme pedia o requisito do projeto.
// 3 passo - Criei o link com a rota que o requisito pedia, deixando o id dinâmico para que ele fosse alterado conforme o id de cada filme.
