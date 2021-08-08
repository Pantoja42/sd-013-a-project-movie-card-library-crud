// Requisito 4 - Faça uma requisição para buscar o filme que deverá ser renderizado dentro de Movie Details
// MovieDetails se comporta de forma muito semelhante ao MovieList. Ao ser montado, deve fazer uma
// requisição utilizando a função getMovie, se atente para o nome da função que é muito semelhante ao
// de outra função que já utilizamos, a getMovies, do módulo movieAPI, passando o id do filme.
// O componente Loading deve ser renderizado enquanto a requisição estiver em curso. Após terminar,
// deve-se renderizar um card com mais detalhes sobre o filme, contendo:

// Uma <img> com a imagem do filme e alt='Movie Cover';
// Título;
// Subtítulo;
// Sinopse;
// Gênero;
// Avaliação;
// um link com o texto "EDITAR" apontando para a rota /movies/:id/edit e um link apontando para a rota raiz (/) com o texto "VOLTAR".
// Os campos devem existir no cartão conforme ilustrado na imagem abaixo.

// O que será verificado:
// Será validado se MovieDetails exibe o texto "Carregando..." enquanto estiver fazendo a requisição
// Será validado se MovieDetails exibe o título, o subtítulo, a sinopse, a imagem e o gênero do filme
// Será validado se MovieDetails contém um botão com o texto "VOLTAR" que redireciona para a página inicial
// Será validado se MovieDetails contém um botão com o texto "EDITAR" que redireciona para a página de edição de filme
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = { // Passo 1: Setar o estado inicial
      movie: {},
      isLoading: true,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
  }

  componentDidMount() { // Passo 4: Chamando a função para que ela seja executada durante a atualização do componente
    this.fetchMovie();
  }

  // Passo 2: Função que faz o fetch nos filmes:

  async handleDeleteMovie() {
    const { match: { params: { id } } } = this.props; // Acessando o id através de props que vem nas propriedades do propsReactRouter: https://reactrouter.com/web/api/match
    movieAPI.deleteMovie(id);
  }

  fetchMovie() {
    const { match: { params: { id } } } = this.props; // Acessando o id através de props que vem nas propriedades do propsReactRouter: https://reactrouter.com/web/api/match
    movieAPI.getMovie(id)
      .then((response) => {
        this.setState({ movie: response, isLoading: false });
      }); // Trocando o estado
  }

  render() {
    const { movie, isLoading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (isLoading === true) {
      return (
        <Loading />
      );
    }
    // Passo 5:
    // {loading && <Loading />} diz que se loading for verdadeiro executa <Loading />
    // Criar title que não tinha no return
    // Criar dois Links

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ `Title: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>
          EDITAR
        </Link>
        <Link to="/">
          VOLTAR
        </Link>
        <Link to="/" onClick={ this.handleDeleteMovie }>
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
