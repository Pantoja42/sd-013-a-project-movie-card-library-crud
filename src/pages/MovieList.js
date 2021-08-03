import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
// codigo feito com ajuda de estudantes em uma sala de estudos

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      load: false,
    };
  }
  
  // Prciso definir o movies como a api, por isso crio uma função fora, pois se criar uma unica não terá como chamar dentro dela mesmo, além de não poder usar o this.

  fetchAPI = async () => {
    const response = await movieAPI.getMovies();
    this.setState(() => ({
      movies: response,
      load: true,
    }));

  }

  componentDidMount() {
   this.fetchAPI();
  }

  render() {
    const { movies , load} = this.state;
   // Render Loading here if the request is still happening (dica de ouro)

    if(load === false){
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
