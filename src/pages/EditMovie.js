import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async getList() {
    const { location: { pathname } } = this.props;
    let id = pathname.split('/');
    id = Number(id[2]);
    const idMovie = await movieAPI.getMovie(id);
    this.setState({
      status: false,
      movie: idMovie,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (status) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

EditMovie.defaultProps = {
  location: {},
};

export default EditMovie;
