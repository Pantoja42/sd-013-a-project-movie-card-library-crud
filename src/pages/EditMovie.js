import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import { updateMovie, getMovie } from '../services/movieAPI';

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
    this.fetchUpdate(updateMovie(updatedMovie));
  }

  async fetchUpdate(updateFunc) {
    const receivePromise = await updateFunc;
    if (receivePromise === 'OK') this.setState({ shouldRedirect: true });
  }

  async fetch(newGetMovie) {
    const { match: { params } } = this.props;
    const { id } = params;
    const receivePromise = await newGetMovie(id);
    this.setState({
      movie: receivePromise,
      status: '',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    const verifyRedirectState = () => {
      if (shouldRedirect) {
        console.log(shouldRedirect);
        return <Redirect to="/" />;
      }
    };

    const showRender = () => {
      if (status === 'loading') {
        return <Loading />;
      }
      return <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />;
    };

    return (
      <div data-testid="edit-movie">
        { showRender() }
        { verifyRedirectState() }
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
