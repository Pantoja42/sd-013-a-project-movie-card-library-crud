import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = { // Seta o estado inicial
      movies: [],
      loading: true,
    };

    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    this.handleState();
  }

  async handleState() { // função assíncrona
    const moviesList = await movieAPI.getMovies();
    this.setState({
      movies: moviesList,
      loading: false,
    });
  }

  render() {
    const { loading, movies } = this.state;
    return (
      <div data-testid="movie-list">
        {loading && <Loading />}
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;

// Referências:
// https://pt-br.reactjs.org/docs/getting-started.html
// https://github.dev/tryber/sd-013-a-live-lectures/tree/lecture/11.2
// https://app.betrybe.com/course/front-end/   ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/o-que-vamos-aprender/cf310dcf-fed4-4322-b0e8-bb188901ca6a?use_case=calendar
// https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/o-que-vamos-aprender/100e758a-a080-4726-a460-a68620a175ae?use_case=calendar
// https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/17
