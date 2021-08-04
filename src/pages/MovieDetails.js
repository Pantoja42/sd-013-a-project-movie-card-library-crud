import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: false,
    }

    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  async fetchMovie() {
    const { id } = this.props.match.params;

    const movie = await movieAPI.getMovie(id);

    this.setState({
      movie,
    })
  }

  async deleteMovie() {
    const { id } = this.props.match.params;

    const deletingMovie = await movieAPI.deleteMovie(id);

    return deletingMovie;
  }

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { id } = this.props.match.params;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const movieDetails = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <hr />
        <div>
          <Link to={ `/movies/${id}/edit` } >EDITAR</Link>
          <Link to="/" onClick={ this.deleteMovie } >DELETAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );

    return (
      movie !== false ? movieDetails : <Loading />
    );
  }
}

export default MovieDetails;
