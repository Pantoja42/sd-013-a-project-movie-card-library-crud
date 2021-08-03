import React, { Component } from 'react';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import { Redirect } from 'react-router';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movie: undefined,
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async fetchEditMovie() {
    const { id } = this.props.match.params;
    const requestedMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: requestedMovie,
      status: 'loaded',
    });
  }

  componentDidMount() {
    this.fetchEditMovie();
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to='/' />
      )
    }

    if (status === 'loading') {
      return (
        <Loading />
      )
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
