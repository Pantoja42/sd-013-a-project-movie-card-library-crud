import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: false,
    };
    this.movieDetailsButtons = this.movieDetailsButtons.bind(this);
    this.movieDetailsCard = this.movieDetailsCard.bind(this);
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

  movieDetailsButtons(movieID) {
    return (
      <div className="buttonContainer">
        <NavLink to="/" className="buttonLink"> VOLTAR </NavLink>
        <NavLink to={ `/movies/${movieID}/edit` } className="buttonLink">
          EDITAR
        </NavLink>
      </div>

    );
  }

  movieDetailsCard(movie) {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details" className="movie-details-page">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        {this.movieDetailsButtons(id)}
      </div>
    );
  }

  render() {
    const { loading, movie } = this.state;
    return (loading ? <Loading /> : this.movieDetailsCard(movie));
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
