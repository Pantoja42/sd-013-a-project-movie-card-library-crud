import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      filme: {},
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
    const filme = await movieAPI.getMovie(id);
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
