import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  // https://www.valentinog.com/blog/await-react/
  // componentDidMount() {
  //   movieAPI.getMovies().then((res) => this.setState({ movies: res }));
  // }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const requestedMovies = await movieAPI.getMovies();
        console.log(requestedMovies);
        this.setState({
          movies: [...requestedMovies],
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        {loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
