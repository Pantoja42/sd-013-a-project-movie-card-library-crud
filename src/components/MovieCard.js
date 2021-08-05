// ==================================

// Requisito 3 - Insira um link para a página de detalhes de um filme dentro de MovieCard
// Todos os MovieCards devem possuir em seu conteúdo, pelo menos, o título, a sinopse e um link com o texto
// "VER DETALHES" que aponta para a rota movies/:id, onde :id é o id do filme.
// Esta rota exibirá informações detalhadas de um filme.

// O que será verificado:
// Será validado se cada MovieCard exibe pelo menos o título e a sinopse de seu respectivo filme.

// Será validado se cada MovieCard contém um link com o texto VER DETALHES que redireciona para a página
// de detalhes do filme.

// ==================================

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // Passo 1: Acessando movie via props a lista de filmes de movieAPI.js
    const { title, storyline, id } = movie; // Passo 2: Desconstruindo exatamente as props que usaremos dentro do return
    // Passo 3: Renderizamos title, storyline e id dentro de alguma tag, aqui usei o <p>
    // Passo 4: Fazer o <Link /> com o texto VER DETALHES que tem como to={} o caminho de detalhe de qualquer
    // filme, já que usei o path de forma dinâmica.
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

// Passo 5: Fazer as propTypes (lembrar de importar)
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
