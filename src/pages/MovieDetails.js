import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movies: '',
    };

    this.catchMovie = this.catchMovie.bind(this);
  }

  componentDidMount() {
    this.catchMovie();
  }

  async catchMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true });
    movieAPI.getMovie(id)
      .then((resolve) => this.setState({ movies: resolve, loading: false }));
  }

  render() {
    const { loading, movies } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movies;
    const carregando = <Loading />;

    return (
      <div data-testid="movie-details">
        {loading ? carregando : null }
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Título: ${title}` }</p>
        <p>{ `Subtítulo: ${subtitle}` }</p>
        <p>{ `Sinopse: ${storyline}` }</p>
        <p>{ `Gênero: ${genre}` }</p>
        <p>{ `Avaliação: ${rating}` }</p>
        <div>
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </div>

      </div>
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
