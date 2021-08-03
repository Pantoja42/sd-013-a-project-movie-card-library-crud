// React
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Services
import * as movieAPI from '../services/movieAPI';

// Child Components
import { MovieForm, Loading } from '../components';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({ loading: true });
    movieAPI.createMovie(newMovie)
    // Resolves
      .then(() => this.setState({
        shouldRedirect: true,
      }))
    // Rejects
      .catch((error) => console.error(error));
  }

  render() {
    const { state: { loading, shouldRedirect } } = this;

    if (shouldRedirect) return <Redirect to="/" />;
    if (loading) return <Loading />;

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default NewMovie;
