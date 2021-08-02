import React from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const { getMovies } = movieAPI;
    const response = await getMovies();
    this.setState({
      movies: response,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
