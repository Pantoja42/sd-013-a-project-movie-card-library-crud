import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      status: 'loading',
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.requestMovie();
  }

  handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  requestMovie = async () => {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    const movieResult = await getMovie(id);
    this.setState({
      movie: movieResult,
      status: 'loaded',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      // Redirect
      return (
        <Redirect to="/" />
      );
    }

    if (status === 'loading') {
      // render Loading
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
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};
EditMovie.defaultProps = {
  match: {
    params: {
      id: 0,
    },
  },
};
export default EditMovie;
