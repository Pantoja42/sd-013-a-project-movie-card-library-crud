import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      shouldRedirect: false,
      status: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // no final da montagem do componente executa a função findMovie com o parametro id encontrado na props do react-router-dom
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.findMovie(id);
  }

  // executa a funçao updateMovie do arquivo movieAPI para atualizar os dados do filme, depois altera o status de shouldRedirect que agora aciona uma condicional que podera retornar a pagina <MovieList />
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  // executa a função getMovie do arquivo MovieAPI que tem como objetivo filtrar o objeto filme que possui o mesmo id que foi passado como parametro na funçao
  findMovie = async (id) => {
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
      status: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }

    if (status === false) {
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
