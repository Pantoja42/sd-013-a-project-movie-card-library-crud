import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loaded: false,
    }
  }
  async fetchMovie() {
    const { id } = this.props.match.params;
    const requestedMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: requestedMovie,
      loaded: true,
    });
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleDelete(movie) {
    const { id } = movie;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loaded } = this.state;
    const renderMovieOrLoading = () => {
      if (loaded) {
        if (movie === undefined ) {
          return (
            <p>erro</p>
          )
        }
        const { id, imagePath, title, subtitle, storyline, genre, rating } = movie;
        return (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ title }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to="/">VOLTAR</Link>
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            <Link to='/' onClick={ () => this.handleDelete(this.state.movie) }>DELETAR</Link>
          </div>
        )
      } else {
        return <Loading />
      }
    }

    return (
      renderMovieOrLoading()
    );
  }
}

export default MovieDetails;
