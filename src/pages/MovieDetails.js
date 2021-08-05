import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };

    this.fetchMovieById = this.fetchMovieById.bind(this);
  }

  componentDidMount() {
    this.fetchMovieById();
  }

  async fetchMovieById() {
    const { match } = this.props;
    const { id } = match.params;

    const movie = await movieAPI.getMovie(id);

    await this.setState(() => ({
      loading: false,
      movie,
    }));
  }

  render() {
    const { movie, loading } = this.state;
    const { storyline, imagePath, genre, rating, subtitle } = movie;

    console.log(movie);

    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to="/">VOLTAR</Link>
        </div>
        <Link to="/movies/:id/edit">EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
