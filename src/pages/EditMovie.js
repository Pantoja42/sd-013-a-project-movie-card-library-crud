// Requisito 5
// Referência: https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/51

import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    // Passo 1 - setar o estado inicial
    this.state = {
      movie: {},
      status: 'loading', // PQ AQUI É 'status' E NÃO 'loading'?
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this); // temos que fazer o .bind da função por não ser uma arrow function
    this.fetchMovies = this.fetchMovies.bind(this); // temos que fazer o .bind da função por não ser uma arrow function
  }

  componentDidMount() {
    this.fetchMovies();
  }

  // Passo 4 - Função que faz a requisição à função 'updateMovie' que está em src/services/movieAPI (Linha 41 a 52)
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => {
        this.setState({
          shouldRedirect: true,
        });
      });
  }

  // Passo 2 - É praticamente a mesma função da page 'MovieDetails', essa função que faz o fetch nos filmes, essa função está em src/services/movieAPI (Linha 32 a 38)
  async fetchMovies() {
    const { match: { params: { id } } } = this.props; // NÃO ENTENDI ESSA LINHA
    movieAPI.getMovie(id).then((response) => { // No arquivo movieAPI tem uma função chamada getMovie, que vai simular uma requisição à API, que tem como parâmetro o 'id', então essa função vai trazer como resultado o 'id' dos filmes.
      this.setState({ // Após o retorno da requisição, o estado é alterado
        movie: response,
        status: '', // essa é a única linha que mudou com relação a função da page 'MovieDatails'
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      // Passo 5 - if do shoulRedirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // Passo 3 - if de Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

// Passo 6 - Fazer o propTypes
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
