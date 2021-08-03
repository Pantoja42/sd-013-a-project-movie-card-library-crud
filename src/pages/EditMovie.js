import React, { Component } from 'react';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
  }

  componentDidMount() {
    this.fetchMovieById();
  }

  async fetchMovieById() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      {status: true},
      async () => {
        const theMovie = await movieAPI.getMovie(id);
        // console.log(theMovie);
        this.setState({
          status: false,
          movie: { ...theMovie },
        });
      });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
