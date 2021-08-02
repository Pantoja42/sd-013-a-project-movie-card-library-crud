import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showMovieToEdit = this.showMovieToEdit.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI
      .getMovie(id)
      .then((data) => {
        this.setState({ movie: data, loading: false });
      });
  }

  handleSubmit(updatedMovie) {
    movieAPI
      .updateMovie(updatedMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  showMovieToEdit() {
    const { movie } = this.state;
    return <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />;
  }

  render() {
    const {
      state: { loading, shouldRedirect },
      showMovieToEdit,
    } = this;
    const renderList = loading ? <Loading /> : showMovieToEdit();
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    return <div data-testid="edit-movie">{renderList}</div>;
  }
}

export default withRouter(EditMovie);
