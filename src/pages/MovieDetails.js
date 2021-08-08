import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovie(id);
  }

  fetchMovie = async (id) => {
    const mov = await movieAPI.getMovie(id);
    this.setState(() => ({ loading: false, movie: mov }));
  }

  deleteMovie = async (id) => {
    await movieAPI.deleteMovie(id);
  }

  movieDetails = (movie) => {
    const { match: { params: { id } } } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Título: ${title}` }</p>
          <p>{ `Subtítulo: ${subtitle}` }</p>
          <p>{ `Sinopse: ${storyline}` }</p>
          <p>{ `Gênero: ${genre}` }</p>
          <p>{ `Avaliação: ${rating}` }</p>
          <div>
            <div>
              <Link to="/"> VOLTAR </Link>
              <br />
              <Link to={ `/movies/${id}/edit` }>
                EDITAR
              </Link>
              <br />
              <Link to="/" onClick={ () => this.deleteMovie(id) }> DELETAR </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { movie, loading } = this.state;
    return (
      loading ? <Loading /> : this.movieDetails(movie)
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
