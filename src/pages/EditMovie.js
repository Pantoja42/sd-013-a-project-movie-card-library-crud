import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, //
      redirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieData = this.getMovieData.bind(this);
  }

  componentDidMount() {
    this.getMovieData();
  }

  // função para redirecionar depois de atualizar um filme
  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      redirect: true,
    });
  }

  async getMovieData() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);

    this.setState({
      loading: false,
      movie,
    });
  }

  render() {
    // passando state para variáveis
    const { loading, redirect, movie } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }

    // ** 5.1 - texto Carregando...
    if (loading) {
      return <Loading />;
    }
    // 5.2 - formulário
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

// fazendo os prop-types
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default EditMovie;
