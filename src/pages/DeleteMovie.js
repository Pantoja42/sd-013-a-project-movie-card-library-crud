import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';

export class DeleteMovie extends Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
    };
    this.setShouldRedirect = this.setShouldRedirect.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.deleteMovie(id);
    this.setShouldRedirect();
  }

  setShouldRedirect() {
    this.setState(() => ({ shouldRedirect: true }));
  }

  deleteMovie(id) {
    movieAPI.deleteMovie(id);
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    return null;
  }
}

DeleteMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DeleteMovie;
