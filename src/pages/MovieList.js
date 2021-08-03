// React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Child Components
import { MovieCard, Loading } from '../components';

// Services
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
    // Resolves
      .then((movies) => this.setState({
        movies,
        loading: false,
      }))
    // Rejects
      .catch((error) => console.error(error));
  }

  render() {
    const { movies, loading } = this.state;

    /* Explicação da estrutura condicional e uso do "&&" aposto à "?", ":" :
    https://reactjs.org/docs/conditional-rendering.html */

    return (
      <div data-testid="movie-list">
        {/* Loading Message */}
        { loading && <Loading /> /* Mostra <Loading /> se loading = true */ }

        {/* Movie list */}
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}

        {/* Add Movie */}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
