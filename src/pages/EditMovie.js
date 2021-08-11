import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

// Referência Vinicius Turma 13 - tribo a
class EditMovie extends Component {
// Setando o estado inicial
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Quando cria o componente eu vou corregar os filmes função getMovie e o status
  // passa para 'noLoading' para parar de aparecer o 'carregando'

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((resolve) => this.setState({ movie: resolve, status: 'notLoading' }));
  }
  // Após dar o submit e preenchimento do form a lista é atualizada com a função
  // updateMovie que vem da movieAPI.
  // ShouldRedirect é true pq vai ser redirecionado para página inicial(if logo abaixo)

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
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
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
