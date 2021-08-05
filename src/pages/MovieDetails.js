import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.keepMovie = this.keepMovie.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);

    this.state = {
      loading: true,
      redirect: false,
      movie: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const movie = await movieAPI.getMovie(id);
    this.keepMovie(movie);
  }

  keepMovie(movie) {
    this.setState({
      movie,
      loading: false,
    });
  }

  async handleDeletion(id) {
    const response = await movieAPI.deleteMovie(id);
    if (response.status === 'OK') this.setState({ redirect: true });
  }

  render() {
    const { loading, redirect } = this.state;

    if (redirect) return <Redirect to="/" />;

    if (loading) return <Loading />;

    const {
      movie: { id, title, storyline, imagePath, genre, rating, subtitle },
    } = this.state;

    return (
      <div data-testid="movie-details">
        <h1>{ title }</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <a href="/" onClick={ () => this.handleDeletion(id) }>DELETAR</a>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
