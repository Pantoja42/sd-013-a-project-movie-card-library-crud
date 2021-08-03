import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: 'loading',
    };

    this.fetchMovie = this.fetchMovie.bind(this); // Fazendo bind pois não fiz uma função formato arrow function
  }

  componentDidMount() {
    this.fetchMovie(); // Chamando a função para que ela seja executada durante a atualização do componente
  }

  // Função que faz o fetch nos filmes:
  async fetchMovie() {
    const { match: { params: { id } } } = this.props; // Acessando o id através de props que vem nas propriedades do propsReactRouter: https://reactrouter.com/web/api/match
    movieAPI.getMovie(id).then((result) => {
      this.setState({
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
    // Especificações acima na linha 44, que diz que se loading for verdadeiro executa <Loading />

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
