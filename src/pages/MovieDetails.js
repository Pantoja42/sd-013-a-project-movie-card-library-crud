import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.movieDelete = this.movieDelete.bind(this);
  }

  componentDidMount() {
    this.fetchMovieById();
  }

  movieDelete() {
    const { movie } = this.state;
    const { id } = movie;
    movieAPI.deleteMovie(id);
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
    const { storyline, imagePath, genre, rating, subtitle, id, title } = movie;

    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to="/">VOLTAR</Link>
        </div>
        <Link to={ `${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.movieDelete }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    name: PropTypes.string.isRequired,
    params: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default MovieDetails;
