import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

// Feito com ajuda do Notion da turma.
// https://www.notion.so/Projeto-Movie-Cards-Library-CRUD-71bd963c46a74e74ac3e4fcda38254bd
class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetMovies = this.fetMovies.bind(this);
  }

  componentDidMount() {
    this.fetMovies();
  }

  async fetMovies() {
    const filmes = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: filmes,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const addCard = <Link to="/movies/new">ADD Cartao</Link>;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : addCard}
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÂO</Link>
      </div>
    );
  }
}

export default MovieList;
