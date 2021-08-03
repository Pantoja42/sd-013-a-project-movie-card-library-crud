import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Proptypes from 'prop-types';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const selectedMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: selectedMovie,
      status: 'loaded',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // https://reactrouter.com/web/api/Redirect
      // https://www.codegrepper.com/code-examples/javascript/%27Redirect%27+is+not+defined+react%2Fjsx-no-undef
      return (
        <Redirect to="/" />
      );
    }

    if (status === 'loading') {
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

// Validação feita com ajuda de Pedro Delicoli
EditMovie.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
