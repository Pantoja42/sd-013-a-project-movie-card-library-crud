import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.informationsMovie();
  }

  async informationsMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie: { ...movie },
      loading: false,
    });
  }

  /* const { title, storyline, imagePath, genre, rating, subtitle } = {}; */
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        {loading && <Loading />}
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        <button type="button"><Link to="/">VOLTAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;

// Passo 1 - Colocar o estado inicial da aplicação, com movie sendo um array vazio que futuramente irá guardar as informações que quero colocar nele, e com loading sendo true em quanto a página for carregada.
// Passo 2 - Criei a função informationsMovie utilizando de forma assíncrona (muita parecida com a função criada no MovieList), mas utilizando id como parametro (conforme pedia o requisito). Esta função vai mudar o estado da aplicação, acresentando os filmes no array através do spread, renderizando as informações do filme, quando ela renderiza o loading passa a ser false. Nesta função usei o match, já que no meu app renderizei a rota /movies/:id (os : permitem passar parametros via match) para o meu componente MovieDetails.
// Passo 3 - Fiz a descontrução do loading para obter o seu estado, e na linha 37 utilizei o operador lógico && para renderizar o loading na página enquanto ela está carregando.
// Passo 5 - Adicionei os dois links conforme o requisito pedia, o primeiro com o id dinamico para ele ir alterando de acordo com cada filme.
