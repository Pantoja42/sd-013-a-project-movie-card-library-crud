import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import { updateMovie, getMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetch(getMovie);
  }

  handleSubmit(updatedMovie) {
    this.fetchUpdate(updateMovie(updatedMovie));
  }

  async fetchUpdate(funcUpdate) {
    const promise = await funcUpdate;
    if (promise === 'OK') this.setState({ shouldRedirect: true });
    console.log(promise);
  }

  async fetch(newUpdateMovie) {
    const { match: { params } } = this.props;
    const { id } = params;
    const promise = await newUpdateMovie(id);
    this.setState({
      movie: promise,
      status: '',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    const showLonding = () => {
      if (status === 'loading') {
        return <Loading />;
      }
      return <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />;
    };

    return (
      <div data-testid="edit-movie">
        { showLonding() }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;

export default EditMovie;
