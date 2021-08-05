// ======================================

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

// ======================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = { // Passo 1: Setar o estado inicial
      movie: {},
      loading: 'loading',
    };

    this.fetchMovie = this.fetchMovie.bind(this); // Passo 3: Fazendo bind pois não fiz uma função formato arrow function
  }

  componentDidMount() {
    this.fetchMovie(); // Passo 4: Chamando a função para que ela seja executada durante a atualização do componente
  }

  // Passo 2: Função que faz o fetch nos filmes:
  async fetchMovie() {
    const { match: { params: { id } } } = this.props; // Acessando o id através de props que vem nas propriedades do propsReactRouter: https://reactrouter.com/web/api/match
    movieAPI.getMovie(id).then((result) => {
      this.setState({ // Trocando o estado
        movie: result,
        loading: false,
      });
    });
  }

  render() {
    const { movie: { id, title, storyline, imagePath, genre, rating, subtitle },
      loading } = this.state;

    // Change the condition to check the state
    // if (true) return <Loading />;

    // Passo 5:
    // {loading && <Loading />} diz que se loading for verdadeiro executa <Loading />
    // Criar title que não tinha no return
    // Criar dois Links

    return (
      <div data-testid="movie-details">
        {loading && <Loading />}

        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Sinopse: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>

        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

// Passo 6: Fazer as PropTypes
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;

// Requisito 4 feito com a ajuda do aluno Pedro Delicolli
// Dei uma olhada também no código de Miguel Retroz, aluno da turma 12
