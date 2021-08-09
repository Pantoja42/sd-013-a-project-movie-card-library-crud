import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';

class NewMovie extends Component {
  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
