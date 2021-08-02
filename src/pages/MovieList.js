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
    this.showMovies = this.showMovies.bind(this);
  }

  async componentDidMount() {
    await movieAPI
      .getMovies()
      .then((data) => {
        // console.log(data);
        this.setState({ movies: data, loading: false });
      });
  }

  showMovies() {
    const { movies } = this.state;
    return movies.map((movie) => (
      <MovieCard key={ movie.title } movie={ movie } />
    ));
  }

  render() {
    const { state: { loading }, showMovies } = this;
    const renderList = loading ? <Loading /> : showMovies();

    return (
      <div data-testid="movie-list">
        {renderList}
      </div>
    );
  }
}

export default MovieList;
