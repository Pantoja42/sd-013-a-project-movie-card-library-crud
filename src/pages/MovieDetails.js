import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.fetch(deleteMovie);
  }

  async fetch(newGetMovie) {
    const { match: { params } } = this.props;
    const { id } = params;
    const receivePromisse = await newGetMovie(id);
    if (receivePromisse) {
      this.setState({ movies: receivePromisse, loading: false });
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
    const receivePromisse = await deleteFunction(id);
    const { status } = receivePromisse;
    if (status === 'ok') this.setState({ shouldRedirect: true });
  }

  render() {
    const { movies, loading, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    const show = () => {
      const estadoLoad = (loading) ? <Loading /> : undefined;
      return estadoLoad;
    };
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ title }</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ { pathname: `${id}/edit` } }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        { show() }
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
