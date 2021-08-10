import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      shouldRedirected: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.treatingMoviePromise();
  }

  componentWillUnmount() {
    this.treatingDeleteMoviePromise();
  }

  treatingMoviePromise = async () => {
    const { match: { params: { id } } } = this.props;
    const requestId = parseInt(id, 10);
    const returnedPromise = await getMovie(requestId);
    this.setState({
      loading: false,
      movie: { ...returnedPromise },
    });
  }

  treatingDeleteMoviePromise = async () => {
    const { match: { params: { id } } } = this.props;
    const requestId = parseInt(id, 10);
    await deleteMovie(requestId);
    this.setState({
      shouldRedirected: true,
    });
  }

  willBeRendered = ({ imagePath, title, subtitle, storyline, genre, rating }) => {
    const { match: { params: { id } } } = this.props;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <button type="button" onClick={ this.treatingDeleteMoviePromise }>DELETAR</button>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }

  render() {
    const { loading, shouldRedirected, movie } = this.state;
    if (shouldRedirected) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div>
        { loading ? <Loading /> : this.willBeRendered(movie) }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
