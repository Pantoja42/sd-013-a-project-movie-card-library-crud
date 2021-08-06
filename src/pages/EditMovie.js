import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleSubmit(event) {
    event = 0;
    return console.log(event);
  }

  controllerState = async (param) => {
    const updatedMovie = await updateMovie(param);
    this.setState({ shouldRedirect: true });
    return updatedMovie;
    // console.log(param);
  }

  fetchApi = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({
      movie: await getMovie(id),
      status: 'carregado',
    });
  }

  render() {
    const { status, movie, shouldRedirect } = this.state;
    // shouldRedirect
    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm
          movie={ movie }
          onSubmit={ () => this.handleSubmit(movie) }
          controllerState={ this.controllerState }
        />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
