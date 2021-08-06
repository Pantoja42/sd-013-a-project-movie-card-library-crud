import React, { Component } from 'react';

import { NavLink, Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const { match: { params: { id } } } = this.props;
        const requestMovie = await movieAPI.getMovie(id);
        this.setState({ movie: requestMovie, loading: false });
      },
    );
  }

  // preventDefault = (e) => e.preventDefault
  render() {
    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    // console.log(movie.id);
    if (loading) { return <Loading />; }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="buttonContainer">
          <NavLink to="/" className="buttonLink"> VOLTAR </NavLink>
          <NavLink to={ `/movies/${id}/edit` } className="buttonLink">
            EDITAR
          </NavLink>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
