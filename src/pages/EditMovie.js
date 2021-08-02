import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  }

  componentDidMount() {
    this.FetchMovie();
  }

  handleSubmit = (updatedMovie) => {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  FetchMovie = async () => {
    try {
      const { match } = this.props;
      const { id } = match.params;
      const movie = await movieAPI.getMovie(id);
      this.setState({ movie, loading: false });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        { loading ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
