import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(movieObject) {
    await movieAPI.createMovie(movieObject);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { redirect } = this.state;
    const formulario = (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
    return (
      redirect ? <Redirect to="/" /> : formulario
    );
  }
}

export default NewMovie;
