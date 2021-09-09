import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const listOfMovie = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: listOfMovie,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const newMovie = <Link to="/movies/new">ADICIONAR CARTÃO</Link>;

    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : newMovie }
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
