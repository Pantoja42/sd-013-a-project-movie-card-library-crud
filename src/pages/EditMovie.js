import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovieApi = this.fetchMovieApi.bind(this);
  }

  componentDidMount() {
    this.fetchMovieApi();
  }

  fetchMovieApi = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie, loading: false,
    });
  };

  handleSubmit = async (movieUpdated) => {
    movieAPI.updateMovie(movieUpdated);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
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

export default EditMovie;
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
