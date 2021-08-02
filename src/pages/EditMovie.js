import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((response) => {
        this.setState({
          movie: response,
          status: 'ok',
        });
      });
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  async handleSubmit(movie) {
    await movieAPI.updateMovie(movie);
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { status, movie } = this.state;
    // if (shouldRedirect) {
    //   return <h1>Redirecionado</h1>;
    // }

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
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default EditMovie;
