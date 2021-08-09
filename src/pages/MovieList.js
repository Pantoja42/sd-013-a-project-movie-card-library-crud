import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
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

  async fetch(newGetMovies) {
    const receivePromisse = await newGetMovies();
    this.setState({
      movies: Object.values(receivePromisse),
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const show = () => {
      if (loading) return <Loading />;
      return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    };
    return (
      <div data-testid="movie-list">
        {show()}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
