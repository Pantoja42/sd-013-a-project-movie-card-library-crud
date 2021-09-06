import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import '../App.css';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: 'false',
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const movie = await movieAPI.getMovie(id);
    this.getMovieEdit(id);
  }

  async handleSubmit(updatedMovie) {
    this.setState({
      shouldRedirect: true,
      status: 'loading',
    });
    await movieAPI.updateMovie(updatedMovie);
  }

  async getMovieEdit(movieId) {

    this.setState({
      status: 'ready',
      movie,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
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
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
