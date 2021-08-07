import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetch(getMovie);
  }

  async fetch(newGetMovie) {
    const { match: { params } } = this.props;
    const { id } = params;
    const receivePromisse = await newGetMovie(id);
    this.setState({
      movies: receivePromisse,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;
    const show = () => {
      const estadoLoad = (loading) ? <Loading /> : undefined;
      return estadoLoad;
    };

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ title }</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        { show() }
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
