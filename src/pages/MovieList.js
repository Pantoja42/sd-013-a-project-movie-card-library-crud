import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetch(getMovies);
  }

  async fetch(get) {
    const promise = await get();
    this.setState({
      movies: Object.values(promise),
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    const loadingShow = () => {
      if (loading) return <Loading />;
      return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    };

    return (
      <div data-testid="movie-list">
        {loadingShow()}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
