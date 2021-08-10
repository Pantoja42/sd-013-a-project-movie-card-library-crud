import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirected: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.treatingNewMoviePromise(newMovie);
  }

  treatingNewMoviePromise = async (newMovie) => {
    await createMovie(newMovie);
    this.setState({
      shouldRedirected: true,
    });
  };

  render() {
    const { shouldRedirected } = this.state;
    if (shouldRedirected) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
