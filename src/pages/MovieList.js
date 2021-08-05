import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import '../App.css';

import * as movieAPI from '../services/movieAPI';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => {
        this.setState({
          movies: data,
        });
      });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) return <Loading />;
    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
