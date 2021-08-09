import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setLoadingState = this.setLoadingState.bind(this);
    this.setRedirectState = this.setRedirectState.bind(this);
  }

  componentDidMount() {
    this.setLoadingState();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
  }

  setRedirectState() {
    this.setState(() => ({ shouldRedirect: true }));
  }

  setLoadingState() {
    this.setState({ loading: true },
      async () => {
        const { match } = this.props;
        const { params } = match;
        const { id } = params;
        const movieId = await movieAPI.getMovie(id);
        this.setState(() => ({
          loading: false,
          movie: movieId,
        }));
      });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    if (loading) return <Loading />;
    return (
      <div data-testid="edit-movie">
        <MovieForm
          movie={ movie }
          redirect={ this.setRedirectState }
          onSubmit={ this.handleSubmit }
        />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
