import React, { Component } from 'react';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
    const { match: {params: {id}}} = this.props;
    const movieDetails = await movieAPI.getMovie(id);
    console.log(movieDetails)
  }

  handleSubmit(updatedMovie) {
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (movie === '') return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
