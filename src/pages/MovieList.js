import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const data = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: data,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const setCard = <Link to="/movies/new">ADICIONAR CARTÃO</Link>;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : setCard}

        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
