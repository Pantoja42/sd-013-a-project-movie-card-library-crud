import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.requisitionApi = this.requisitionApi.bind(this);
  }

  componentDidMount() {
    this.requisitionApi();
  }

  async requisitionApi() {
    // await this.setState({ loading: true });
    const getPromise = await movieAPI.getMovies();
    await this.setState(() => ({
      loading: false,
      movies: getPromise,
    }));
  }

  render() {
    const { loading, movies } = this.state;
    // Render Loading here if the request is still happening
    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
