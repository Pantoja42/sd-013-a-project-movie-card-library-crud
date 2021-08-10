import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };
    this.getMovieData = this.getMovieData.bind(this);
    this.movieRemove = this.movieRemove.bind(this);
  }

  componentDidMount() {
    this.getMovieData();
  }

  async getMovieData() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie,
    });
  }

  movieData = (movie) => {
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <h2>{ `Subtitle: ${subtitle}` }</h2>
        <h4>{ `Storyline: ${storyline}` }</h4>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.movieRemove(id) }>DELETAR</Link>
      </div>
    );
  }

  async movieRemove(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movie } = this.state;

    return (
      loading ? <Loading /> : this.movieData(movie)
    );
  }
}

const { shape, string } = PropTypes;

MovieDetails.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }),
}.isRequired;

export default MovieDetails;
