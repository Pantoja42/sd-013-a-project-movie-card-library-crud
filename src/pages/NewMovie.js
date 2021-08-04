import React, { Component } from 'react';
import { Redirect } from 'react-router';

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

  /* async handleSubmit(newMovie) {
    const movie = await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  } */

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then(() => this.setState({
        shouldRedirect: true,
      }));
  }

  render() {
    const { shouldRedirect } = this.state;
    return (
      <div data-testid="new-movie">
        { shouldRedirect && <Redirect to="/" /> }
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;

// Passo 1 -
// Observação: por problema com o lint, ao final troquei a função com async await por then.
