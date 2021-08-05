import React, { Component } from 'react';

import { getMovies } from '../services/movieAPI';
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
    this.fetch(getMovies);
  }

  async fetch(get) {
    const promise = await get();
    const { id } = this.props.match.params;
    const srcMovieId = Object.values(promise).find((movie) => movie.id === id);
    this.setState({
      movies: srcMovieId,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    const loadingShow = () => {
      const loadingCondition = (loading) ? <Loading /> : undefined;
      return loadingCondition;
    };
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        {loadingShow()}
      </div>
    );
  }
}

export default MovieDetails;
