import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading: true,
      shouldRedirect: false,
    };

    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const movieId = window.location.pathname.split('/')[2];
    const movie = await movieAPI.getMovie(movieId);

    this.setState({ movie, loading: false });
  }

  async deleteMovie(id) {
    await movieAPI.deleteMovie(id);

    this.setState({ shouldRedirect: true });
  }

  render() {
    const { movie, loading, shouldRedirect } = this.state;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Título: ${title}` }</p>
        <p>{ `Subtítulo: ${subtitle}` }</p>
        <p>{ `Sinopse: ${storyline}` }</p>
        <p>{ `Gênero: ${genre}` }</p>
        <p>{ `Avaliação: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.deleteMovie(id) }> DELETAR </Link>
      </div>
    );
  }
}

export default MovieDetails;
