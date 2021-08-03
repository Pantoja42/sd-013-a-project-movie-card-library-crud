import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    this.setState(
      { status: 'loading' },
      async () => {
        const resultMovie = await movieAPI.updateMovie(updatedMovie);
        this.setState({
          movie: resultMovie,
          status: '',
          shouldRedirect: true,
        });
      },
    );
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { status: 'loading' },
      async () => {
        const resultMovie = await movieAPI.getMovie(id);
        this.setState({
          movie: resultMovie,
          status: '',
          shouldRedirect: false,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
      return (<Loading />);
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
  }).isRequired,
};

export default EditMovie;
