// =======================================
// Requisito 6 - Insira um link na página inicial para NewMovie para criar novos cartões
// O link deve conter o texto "ADICIONAR CARTÃO" e apontar para a rota /movies/new,
// contendo um formulário para criar novos cartões.

// Na rota /movies/new, utilizando a callback passada para MovieForm, NewMovie deve criar um novo
// cartão utilizando a função createMovie do módulo movieAPI. Após o fim da requisição, NewMovie deve
// redirecionar o app para a página inicial, contento o novo cartão.

// O que será verificado:
// Será validado se a página inicial contém um link "ADICIONAR CARTÃO".
// Esse link deve redirecionar para a página de criação de filmes

// Será validado se NewMovie contém um formulário que faz uma requisição para API para
// criar um novo filme. Após a criação, a pessoa usuária deverá ser redirecionada para a página inicial.

// =======================================

import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false, // Passo 1: Setar estado inicial
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Passo 2: Função que faz requisição à função createMovie que está no arquivo movieAPI
  // Atualizar o estado de shouldRedirect
  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then(this.setState({
        shouldRedirect: true,
      }));
  }

  // Passo 3: Trazer o estado para dentro do render
  // Fazer o if do shouldRedirect que vai mandar o usuário para a home depois de criar o novo filme
  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
// Agora vamos no arquivo MovieForm para adicionarmos as PropTypes =)
export default NewMovie;
