import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: {},
      loading: true,
    };
  }
  // didmount  É invocado imediatamente após um componente ser montado
  // coloquei um then pq vou receber uma promessa

  componentDidMount() {
    // Ajuda do Vinicius turma 13 - tribo A.
    // são umas props internas, que já são pré definidas(para capturar esse id)
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((resolve) => this.setState({ movies: resolve, loading: false }));
  }
  // Após o componente ser montado o carregando é retirado.

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;
    const { movies: {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } } = this.state;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
