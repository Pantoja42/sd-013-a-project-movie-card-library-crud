import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';

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
    const newMovie = <Link to="/movies/new">Adiciona</Link>

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : newMovie }
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
