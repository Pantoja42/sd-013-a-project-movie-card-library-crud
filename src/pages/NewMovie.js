import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor() {
    super();
    this.state = {
      redirecionar: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(movie) {
    movieAPI.createMovie(movie);
    this.setState({ redirecionar: true });
  }

  render() {
    const { redirecionar } = this.state;

    if (redirecionar === true) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
