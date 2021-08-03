import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovie(id);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  editMovie = (movie) => (
    <div data-testid="edit-movie">
      <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
    </div>
  )

  fetchMovie = async (id) => {
    const movie = await movieAPI.getMovie(id);
    this.setState({ status: 'loading', movie });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return this.editMovie(movie);
    }

    return (
      <Loading />
    );
  }
}

export default EditMovie;
