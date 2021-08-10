import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import { updateMovie, getMovie } from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      shouldRedirect: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.treatingIdMoviePromise();
  }

  treatingIdMoviePromise = async () => {
    this.setState(
      { status: 'loading' },
      async () => {
        const { match: { params: { id } } } = this.props;
        const requestId = parseInt(id, 10);
        const returnedPromise = await getMovie(requestId);
        this.setState({
          status: '',
          movie: { ...returnedPromise },
        });
      },
    );
  }

  treatingEditMoviePromise = async () => {
    this.setState(
      { status: 'loading' },
      async () => {
        const { movie } = this.state;
        await updateMovie(movie);
        this.setState({
          status: '',
          shouldRedirect: true,
        });
      },
    );
  }

  handleSubmit = (toUpdatedMovie) => {
    this.setState({
      movie: { ...toUpdatedMovie },
    });
    this.treatingEditMoviePromise();
  };

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    if (status === 'loading') {
      return (
        <Loading />
      );
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
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
