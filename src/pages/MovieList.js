import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    // com a ajuda do Vinicius Dionysio e Sugano na monitoria
    const { getMovies } = movieAPI;
    getMovies().then((list) => {
      this.setState({ movies: list });
    });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) return (<Loading />);

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <p>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </p>
      </div>
    );
  }
}

export default MovieList;
