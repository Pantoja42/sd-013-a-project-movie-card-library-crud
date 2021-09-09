import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
  }

    handleSubmit = async (newMovie) => {
      await movieAPI.createMovie(newMovie);
      this.setState({
        shouldRedirect: true,
      });
    }

    render() {
      const { shouldRedirect } = this.state;
      const movieForm = (
        <div data-testid="new-movie">
          <MovieForm onSubmit={ this.handleSubmit } />
        </div>
      );
      return (
        shouldRedirect ? <Redirect to="/" /> : movieForm);
    }
}
export default NewMovie;
