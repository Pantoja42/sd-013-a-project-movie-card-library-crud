import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirect: false,
      status: '',
    };
  }

  async handleSubmit(newMovie) {
    this.setState({ status: 'loading' }, async () => {
      const addNewMovie = await movieAPI.createMovie(newMovie);
      this.setState({
        redirect: true,
        status: '',
      });
      return addNewMovie;
    });
  }

  render() {
    const { redirect, status } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
