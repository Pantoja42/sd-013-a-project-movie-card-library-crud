import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieCard, MovieForm } from '../components';
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

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    console.log(movieAPI.getMovie(id));
    this.findMovie(id);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie); // depois de 3 sem saber oque fazer descobri que existia uma funçao no services que atualizava o filme
    this.setState({
      shouldRedirect: true,
    });
  }

  // fiz a funcao para requerir apenas o filme desejado antes de descobrir que ja tinha uma funcao feita no services
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
