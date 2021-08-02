import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getMovies = this.getMovies.bind(this);

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getMovies();
    // console.log(movieList);
  }

  async getMovies() {
    movieAPI.getMovies()
      .then((response) => {
        this.setState({
          movies: response,
          isLoading: false,
        });
      });
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening

    if (isLoading) return <Loading />;

    return (
      <div data-testid="movie-list" className="movie-list">
        <Link to="/movies/new" className="add-button rating">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
