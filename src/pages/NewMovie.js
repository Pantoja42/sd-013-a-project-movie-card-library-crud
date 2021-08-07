import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldRedirect: false,
    };
  }

  // handleSubmit(state) {
  //   console.log(state);
  // }

  controllerState = async (param) => {
    console.log(param);
    const updatedMovie = await createMovie(param);
    this.setState({ shouldRedirect: true });
    return updatedMovie;
    // console.log(param);
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm controllerState={ this.controllerState } />
      </div>
    );
  }
}

export default NewMovie;
