import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
      shouldRedirect: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetch(getMovie);
  }

  handleDelete() {
    this.fetchDelete(deleteMovie);
  }

  async fetch(get) {
    const { match: { params } } = this.props;
    const { id } = params;
    const promise = await get(id);
    if (promise) {
      this.setState({ movies: promise, loading: false });
    } else {
      this.setState({
        movies: {
          title: '',
          subtitle: '',
          imagePath: '',
          storyline: '',
          genre: '',
          rating: 0,
        },
      });
    }
  }

  async fetchDelete(deleteFunction) {
    const { match: { params } } = this.props;
    const { id } = params;
    const promise = await deleteFunction(id);
    const { status } = promise;
    if (status === 'OK') this.setState({ shouldRedirect: true });
  }

  render() {
    const { movies, loading, shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    const loadingShow = () => {
      const run = (loading) ? <Loading /> : undefined;
      return run;
    };

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movies;

    return (
      <div data-testid="movie-details">
        {loadingShow()}
        <h4>{ title }</h4>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ { pathname: `${id}/edit` } }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to={ id } onClick={ this.handleDelete }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;

export default MovieDetails;
