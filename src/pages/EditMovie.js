// Requisito 5

import React, { Component } from 'react';
import { MovieForm } from '../components';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    // Passo 1 - setar o estado inicial
    this.state = {
      movie: {},
      status: 'loading', // PQ AQUI É 'status' e não 'loading'?
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(updatedMovie) { // (updatedMovie)
  }

  // Passo 2 - É praticamente a mesma função da page 'MovieDetails', essa função que faz o fetch nos filmes, essa função está em src/services/movieAPI (Linha 32 a 38)
  async fetchMovies() {
    const { match: { params: { id } } } = this.props; // NÃO ENTENDI ESSA LINHA
    movieAPI.getMovie(id).then((response) => { // No arquivo movieAPI tem uma função chamada getMovie, que vai simular uma requisição à API, que tem como parâmetro o 'id', então essa função vai trazer como resultado o 'id' dos filmes.
      this.setState({ // Após o retorno da requisição, o estado é alterado
        movie: response,
        status: '',
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
