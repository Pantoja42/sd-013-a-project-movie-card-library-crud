import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirect: false,
    };
  }

  handleSubmit(newMovie) {
    this.setState({ redirect: false }, () => {
      movieAPI.createMovie(newMovie);
      this.setState({
        redirect: true,
      });
    });
  }

  render() {
    const { redirect } = this.state;
    const movieForm = (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
    return (
      <div>
        {redirect ? <Redirect to="/" /> : movieForm}
      </div>
    );
  }
}
export default NewMovie;
