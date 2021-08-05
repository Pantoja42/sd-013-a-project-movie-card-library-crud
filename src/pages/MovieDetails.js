import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();

    this.keepMovie = this.keepMovie.bind(this);

    this.state = {
      loading: true,
      movie: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const movie = await movieAPI.getMovie(id);
    this.keepMovie(movie);
  }

  keepMovie(movie) {
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;

    if (loading) return <Loading />;

    const {
      movie: { id, title, storyline, imagePath, genre, rating, subtitle }
    } = this.state;

    return (
      <div data-testid="movie-details">
        <h1>{ title }</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
