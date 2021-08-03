import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import NewMovie from './NewMovie';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      status: false,
      shouldRedirect: false,
    };
  }

  // crio uma condição para quando a pagina for montada verificar se a rota não e "movies/new" pois quando a rota for essa deve ser renderizada a pagina <NewMovie />
  componentDidMount() {
    const { match: { params: { id } } } = this.props; // props recebida do route
    return (id === 'new'
      ? this.newMovie()
      : this.findMovie(id)
    );
  }

  // função que simula uma requesição na api para obter como resposta o objeto com o "id" igual ao requerido em seguida o state movie recebe esse objeto e status de loading recebe true
  findMovie = async (id) => {
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
      status: true,
    });
  }

  // funçao para retirar a tela de carregamento <Loading /> quando a rota for "movies/new"
  newMovie = () => {
    this.setState({
      status: true,
    });
  }

  // função para deletar filme, recebe o id do filme que deve ser deletado
  deleteMovie = (movieId) => {
    movieAPI.deleteMovie(movieId);
    this.setState({
      shouldRedirect: true,
    });
  }

  // função que renderiza a pagina <MovieDetails />
  // fiz a rederização condicional pois essa pagina so deve ser renderizada quando receber um resposta da api ou quando a rota não for "movies/new"
  movieDetailsRender = () => {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{title}</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { match: { params: { id } } } = this.props;
    const { status, shouldRedirect } = this.state;

    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }

    if (status === false) {
      return <Loading />;
    }

    return (id === 'new'
      ? <NewMovie />
      : this.movieDetailsRender()
    );
  }
}
// https://stackoverflow.com/questions/47519612/eslint-match-is-missing-in-props-validation-react-prop-types/47519751
// ajuda para escrever essa sintaxe
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
