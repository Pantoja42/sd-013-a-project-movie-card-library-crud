import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetch(getMovie);
  }

  handleSubmit(updatedMovie) {
    this.update(updateMovie(updatedMovie));
  }

  async update(statusUp) {
    const promise = await statusUp;
    if (promise === 'OK') this.setState({ shouldRedirect: true });
  }

  async fetch(get) {
    const { match: { params } } = this.props;
    const { id } = params;
    const promise = await get(id);

    this.setState({
      movie: promise,
      status: '',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    const loadingShow = () => {
      if (status === 'loading') {
        return <Loading />;
      }
      return <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />;
    };

    return (
      <div data-testid="edit-movie">
        {loadingShow()}
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
}.isRequired;

export default EditMovie;
