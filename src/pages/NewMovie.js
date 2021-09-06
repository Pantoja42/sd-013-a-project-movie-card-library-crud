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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    this.setState({
      shouldRedirect: true,
    });
    await movieAPI.createMovie(newMovie);
  }

  render() {
    const { shouldRedirect } = this.state;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
        {shouldRedirect && <Redirect to="/" />}
      </div>
    );
  }
}

export default NewMovie;
