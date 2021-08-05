import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovieById = this.fetchMovieById.bind(this);
  }

  componentDidMount() {
    this.fetchMovieById();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchMovieById() {
    const { match } = this.props;
    const { id } = match.params;

    const movie = await movieAPI.getMovie(id);

    await this.setState(() => ({
      loading: false,
      movie,
    }));
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    name: PropTypes.string.isRequired,
    params: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default EditMovie;
