import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      movie: {},
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieData = this.getMovieData.bind(this);
  }

  componentDidMount() {
    this.getMovieData();
  }

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
    const { loading, redirect, movie } = this.state;
    if (redirect) { return <Redirect to="/" />; }
    if (loading) { return <Loading />; }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

const { shape, string } = PropTypes;

EditMovie.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }),
}.isRequired;

export default EditMovie;
