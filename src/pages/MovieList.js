import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      load: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((data) => {
      this.setState({
        movies: data,
        load: false,
      });
    });
  }

  render() {
    const { movies, load } = this.state;
    if (load) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies
          .map((movieItem) => <MovieCard key={ movieItem.title } movie={ movieItem } />)}
      </div>
    );
  }
}

export default MovieList;
