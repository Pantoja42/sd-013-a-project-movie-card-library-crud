import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filme: {},
      loading: true,
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      redirect: true,
    });
  }

  getMovieData() {
    const { match: { params: { id } } } = this.props;
    const filme = movieAPI.getMovie(id);
    this.setState({
      loading: false,
      filme,
    });
  }

  render() {
    const { loading, redirect, filme } = this.state;
    const formulario = (
      <div data-testid="edit-movie">
        <MovieForm movie={ filme } onSubmit={ this.handleSubmit } />
      </div>
    );
    if (redirect) { return <Redirect to="/" />; }
    if (loading) { return <Loading />; }
    return (
      formulario
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
