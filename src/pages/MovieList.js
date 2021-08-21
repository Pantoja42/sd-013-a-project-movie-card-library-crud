import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

    componentDidMount = () => {
      movieAPI.getMovies().then((result) => {
        this.setState({
          movies: result,
          loading: false,
        });
      });
    }

    render() {
      const { movies, loading } = this.state;
      // const renderLoading = ((loading === false) ? <Loading /> : false);
      // usando if shorthand para se loading for true renderizar a mensagem carregando...
      if (loading) return <Loading />;
      // Render Loading here if the request is still happening

      return (
        <div data-testid="movie-list">
          {/* {renderLoading} */}
          {/* link para a rota de criar novo filme */}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          {/* map para renderizar todos os filmes */}
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      );
    }
}

export default MovieList;
