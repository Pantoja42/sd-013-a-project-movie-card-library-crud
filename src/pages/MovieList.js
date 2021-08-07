import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Venom from '../Venom.mp4';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const requestMovies = await movieAPI.getMovies();
        this.setState({ movies: [...requestMovies], loading: false });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    if (loading) { return <Loading />; }
    return (

      <div data-testid="movie-list" className="movie-list">
        <video autoPlay muted loop className="background-video">
          <source src={ Venom } type="video/mp4" />
        </video>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
