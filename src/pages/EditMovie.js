import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovieById();
  }

  async handleSubmit(updatedMovie) {
    this.setState({
      shouldRedirect: true,
    });
    await movieAPI.updateMovie(updatedMovie);
  }

  async fetchMovieById() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { status: 'loading' },
      async () => {
        const theMovie = await movieAPI.getMovie(id);
        // console.log(theMovie);
        this.setState({
          status: 'done',
          movie: { ...theMovie },
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
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
  match: PropTypes.shapeof({
    params: PropTypes.shapeof({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
