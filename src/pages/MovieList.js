import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loaded: false,
    };
  }

  async fetchMovies() {
    const requestedMovies = await movieAPI.getMovies();
    this.setState({
      movies: requestedMovies,
      loaded: true,
    })
  }

  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    const { movies, loaded } = this.state;

    const renderListOrLoading = () => {
      if (loaded) {
        return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
      } else {
        return <Loading />
      }
    }

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {renderListOrLoading()}
      </div>
    );
  }
}

export default MovieList;
