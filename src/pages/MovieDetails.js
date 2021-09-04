// Requisito 4
// Referências: 
// https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/51
// https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/17

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
      shouldRedirect: false,
    };

    // Passo 3 - fazemos o bind pois não foi usado uma arrow function para fazer a requisição à API (Passo 2)
    this.handleRemove = this.handleRemove.bind(this);
  }

  // Função que faz o fetch nos filmes, essa função está em src/services/movieAPI (Linha 32 a 38)
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((data) => {
        this.setState({
          loading: false,
          movie: data,
        });
      });
  }

  // Função que deleta um cartão
  handleRemove() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id)
      .then(() => {
        this.setState({
          shouldRedirect: true,
        });
      });
  }

  render() {
    const { loading, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    if (loading) return <Loading />;

    const { movie: {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } } = this.state;

    // Passo 5 - {loading && <Loading />} se loading for verdadeiro executa <Loading />
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>
        <button type="button">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </button>
        <button type="button">
          <Link to="/" onClick={ this.handleRemove }>DELETAR</Link>
        </button>
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
