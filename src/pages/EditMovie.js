import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
      filme: filme,
    })
  }

  componentDidMount() {
    this.getMovieData();
  }

  render() {
    const { loading, redirect, filme } = this.state;
    const formulario = 
    <div data-testid="edit-movie">
      <MovieForm movie={ filme } onSubmit={ this.handleSubmit } />
    </div>
    if (redirect) { return <Redirect to="/" /> }
    return (
      loading ? <Loading /> : (redirect ? <Redirect to="/" /> : formulario)
    );
  }
}

export default EditMovie;
