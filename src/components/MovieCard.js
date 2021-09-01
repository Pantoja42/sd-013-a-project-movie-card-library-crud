// Requisito 3

// Insira um link para a página de detalhes de um filme dentro de MovieCard
// Todos os MovieCards devem possuir em seu conteúdo, pelo menos, o título, a sinopse e um link com o texto "VER DETALHES" que aponta para a rota movies/:id, onde :id é o id do filme. Esta rota exibirá informações detalhadas de um filme.

// O que será verificado:
// Será validado se cada MovieCard exibe pelo menos o título e a sinopse de seu respectivo filme
// Será validado se cada MovieCard contém um link com o texto VER DETALHES que redireciona para a página de detalhes do filme

// Referências:
// https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/51
// https://github.dev/tryber/sd-013-a-live-lectures/tree/lecture/11.2

// ==============================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // Passo 1 - Acessando movie via props a lista de filmes em movieAPI.js / movie é a propriedade do .map do componente "MovieList" (linha 46)
    const { title, storyline, id } = movie; // Passo 2 - // Passo 2: Desconstruindo as props que usaremos dentro do return

    // Passo 3
    // linha 23 - renderiza o título está no [array de {objetos}] dentro do arquivo movieData, e que está sendo importado em movieAPI e usado em outros componentes via props "movie"
    // Linha 24 - renderiza a imagem ...
    // Linha 25 - renderiza a sinopse(storyline) ...
    // Linha 26 - renderiza o id ...
    // Passo 4 - Fazer o <Link /> com o texto VER DETALHES que tem como to={} o caminho de detalhe de qualquer filme, já que foi usado o path de forma dinâmica.
    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
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
