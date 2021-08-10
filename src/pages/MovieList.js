import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.treatingMoviesPromise();
  }

  treatingMoviesPromise = () => {
    this.setState(
      { loading: true },
      async () => {
        const returnedPromise = await getMovies();
        this.setState({
          loading: false,
          movies: [...returnedPromise],
        });
      },
    );
  }

  render() {
    const { loading, movies } = this.state;
    return (
      <div data-testid="movie-list">
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        {loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
