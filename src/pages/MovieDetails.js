// Requisito 4

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    // Passo 1 - Setar o estado inicial
    this.state = {
      movie: {},
      loading: 'loading', // PQ AQUI O ESTADO INICIAL É 'loading' E NÃO TRUE?
    };

    // Passo 3 - fazemos o bind pois não foi usado uma arrow function para fazer a requisição à API (Passo 2)
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  // Passo 4 - Fazendo com a que função fetchMovies seja chamada durante a atualização do componente.
  componentDidMount() {
    this.fetchMovies();
  }

  // Passo 2 - Função que faz o fetch nos filmes, essa função está em src/services/movieAPI (Linha 32 a 38)
  async fetchMovies() {
    const { match: { params: { id } } } = this.props; // NÃO ENTENDI ESSA LINHA
    movieAPI.getMovie(id).then((result) => { // No arquivo movieAPI tem uma função chamada getMovie, que vai simular uma requisição à API, que tem como parâmetro o 'id', então essa função vai trazer como resultado o 'id' dos filmes.
      this.setState({ // Após o retorno da requisição, o estado é alterado, o loading passa a ser falso, pois o que aparecerá na tela são os cards e não a msg 'Carregando...'
        movie: result,
        loading: false,
      });
    });
  }

  render() {
    const { movie: { id, title, storyline, imagePath, genre, rating, subtitle },
      loading } = this.state; // NÃO ENTENDI ESSA LINHA

    // Passo 5 - {loading && <Loading />} se loading for verdadeiro executa <Loading />
    return (
      <div data-testid="movie-details">
        {loading && <Loading />}
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

// Passo 6 - Fazer as PropTypes
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
