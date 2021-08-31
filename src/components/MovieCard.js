// Requisito 3
// Referências:
// https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/51
// https://github.dev/tryber/sd-013-a-live-lectures/tree/lecture/11.2

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // Passo 1 - Acessando movie via props a lista de filmes em movieAPI.js / movie é a propriedade do .map do componente "MovieList" (linha 46)
    const { title, imagePath, storyline, id } = movie; // Passo 2 - // Passo 2: Desconstruindo as props que usaremos dentro do return

    // Passo 3
    // linha 15 - renderiza o título está no [array de {objetos}] dentro do arquivo movieData
    // Linha 16 - renderiza a imagem ...
    // Linha ** - renderiza a sinopse(storyline) ...
    // Linha ** - renderiza o id ...
    // Passo 4 - Fazer o <Link /> com o texto VER DETALHES que tem como to={} o caminho de detalhe de qualquer filme, já que foi usado o path de forma dinâmica.
    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <img src={ imagePath } alt={ title } />
        <p>{storyline}</p>
        <h3>{id}</h3>
        <Link to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
        Movie Card
      </div>
    );
  }
}

// Passo 5 - Fazer as propTypes
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

// MovieCard.defaultProps = {
//   movie: {},
// };

export default MovieCard;
