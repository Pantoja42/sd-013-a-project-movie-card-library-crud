import React, { Component } from 'react';

// import MovieForm from '../components/MovieForm';
// import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  //   handleSubmit(newMovie) {
  // }

  render() {
    return (
      <div data-testid="new-movie">
        {/* <MovieForm onSubmit={ this.handleSubmit } /> */}
        <p>New Movie</p>
      </div>
    );
  }
}
export default NewMovie;
