import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: '',
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    this.setState(
      { status: 'loading' },
      async () => {
        const resultMovie = await movieAPI.createMovie(newMovie);
        this.setState({
          status: '',
          redirect: true,
        });
        return resultMovie;
      },
    );
  }

  render() {
    const { status, redirect } = this.state;

    if (redirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
      return (<Loading />);
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
