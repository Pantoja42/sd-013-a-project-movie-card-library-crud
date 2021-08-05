// ==========================================

// 5 - Realize uma requisição para buscar o filme que será editado em EditMovie
// Ao ser montada, a página de edição do filme deve fazer uma requisição pra buscar o filme que será editado
// e deve, ao ter seu formulário submetido, atualizar o filme e redirecionar a página pra rota raíz.

// O que será verificado:
// Será validado se EditMovie exibe o texto "Carregando..." enquanto estiver fazendo a requisição.
// Será validado se EditMovie contém um formulário preenchido com o título, subtítulo, sinopse, caminho da
// imagem e gênero do filme selecionado.
// Será validado se, ao clicar no botão de submit, uma requisição para API é feita e o filme selecionado é
// atualizado. Após a conclusão da atualização a pessoa usuária deve ser redirecionada para a página inicial.

// ==========================================

import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

// o formulário já existe no componente MovieForm.js

class EditMovie extends Component {
  // Passo 1: Constructor setando o estado inicial
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  // Passo 4: Função que faz a requisição à função updateMovie que está em movieAPI.js
  // Fazer o bind da função porque não estamos usando arrow function
  // Quando editarmos o input do formulário do filme que já existia, essa função vai pegar os dados que
  // alteramos, e vai mudar o estado de shoudRedirect
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => {
        this.setState({
          shouldRedirect: true,
        });
      });
  }

  // Passo 2: Pegando a função do arquivo MovieDetails.js
  // Função que faz o fetch nos filmes
  // Fazer o bind da função porque não estamos usando arrow function
  async fetchMovie() {
    const { match: { params: { id } } } = this.props; // Acessando o id através de props que vem nas propriedades do propsReactRouter: https://reactrouter.com/web/api/match
    movieAPI.getMovie(id).then((response) => {
      this.setState({
        movie: response,
        status: '', // essa é a única coisa que muda daquela função de MovieDetails
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Passo 5: Constuir o if de shouldRedirect (Rendering a <Redirect> will navigate to a new location.)
      // https://reactrouter.com/web/api/Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // Passo 3: Construir o if de loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

// Passo 6: Fazer o propTypes
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;

// Feito com a ajuda de Pedro Delicoli, Débora Teodorico e Luiza Antiques
