import React, { Component } from 'react';
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
  }

  async componentDidMount() {
    await movieAPI
      .getMovies()
      .then((data) => {
        // console.log(data);
        this.setState({ movies: data, loading: false });
      });
  }

  render() {
    const { loading, movies } = this.state;
    const showMovies = movies.map((movie) => (
      <MovieCard key={ movie.title } movie={ movie } />
    ));
    const renderList = loading ? <Loading /> : showMovies;

    return (
      <div data-testid="movie-list">
        {renderList}
      </div>
    );
  }
}

export default MovieList;
