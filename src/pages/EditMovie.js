import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Loading from '../components/Loading';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      shouldRedirect: false,
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie: { ...movie },
      status: 'noLoading',
    });
  } */

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((response) => this.setState({
      movie: response,
      status: 'noLoading',
    }));
  }

  /* handleSubmit(updatedMovie) {
    const returnRequest = movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  } */

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => this.setState({
        shouldRedirect: true,
      }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
      // Redirect
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;

// Passo 1 - De acordo com os elementos já existentes no render, defini o estado inicial de cada um deles.
// Passo 2 - Criei dentro de handleSubmit uma função para atualizar o estado do elemento shouldReirect toda vez que o botão submit é clicado com alguma nova informação.
// Passo 3 - Dentro do render completei o código renderizando a rota da página raíz (como pedia o requisito) sempre que o shouldRedirect for true, e para renderizar o arquivo Loading sempre que o status for igual a "loading".
// Passo 4 - Criei uma função componentDidMount (muito parecida com a existente no MovieDetails), onde após ocorrer a renderizaçção inicial e o botão de submit for clicado, um novo elemento é renderizado incluindo as novas informações passadas no array movie.
