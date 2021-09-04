// Requisito 6
// Referência: https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/51

import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    // Passo 1 - criar e setar o estado inicial
    this.state = {
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this); // o .bind já veio pronto
  }

  // Passo 2 - Função que faz a requisição à função 'createMovie' que está em src/services/movieAPI (Linha 55 a 64). Ela atualiza o estado de 'shoulRedirect'
  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then(this.setState({
        shouldRedirect: true,
      }));
  }

  // Passo 3 - colocar o estado dentro do render. Fazer o if do 'shouldRedirect' que vai direcionar o usuário para a home, depois de criar o novo filme
  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    // Essa parte já veio pronta
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
