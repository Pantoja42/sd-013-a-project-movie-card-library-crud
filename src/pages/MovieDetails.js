import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetch(getMovie);
  }

  async fetch(newGetMovie) {
    console.log(newGetMovie(2));
    const { match: { params } } = this.props;
    const { id } = params;
    const promise = await newGetMovie(id);
    this.setState({
      movies: promise,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;
    const showLonding = () => {
      const verifyLonding = (loading) ? <Loading /> : undefined;
      return verifyLonding;
    };

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ title }</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        { showLonding() }
        <Link to={ { pathname: `${id}/edit` } }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
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
