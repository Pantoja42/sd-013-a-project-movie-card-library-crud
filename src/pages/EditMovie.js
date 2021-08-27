import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

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
    this.fetchMovieEdit();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

fetchMovieEdit = async () => {
  const { match: { params: { id } } } = this.props;
  const movieEdit = await movieAPI.getMovie(id);
  this.setState({
    movie: movieEdit,
    status: 'loaded',
  });
}

render() {
  const { status, shouldRedirect, movie } = this.state;
  if (shouldRedirect) {
    // Redirect
    return <Redirect to="/" />;
  }

  if (status === 'loading') {
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
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.number,
    }),
  }).isRequired,
};
export default EditMovie;
