// React
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Validation
import PropTypes from 'prop-types';

// Services
import * as movieAPI from '../services/movieAPI';

// Child Components
import { MovieForm, Loading } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchDetails();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
    // Resolves
      .then(() => this.setState({
        shouldRedirect: true,
      }))
      // Rejects
      .catch((error) => console.log(error));
  }

  fetchDetails = () => {
    const { match: { params: { id } } } = this.props;

    movieAPI.getMovie(id)
    // Resolves
      .then((movie) => this.setState({
        movie,
        loading: false,
      }))
      // Rejects
      .catch((error) => console.log(error));
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;

    if (loading) return <Loading />;

    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default EditMovie;
