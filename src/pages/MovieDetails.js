import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() { // A ideia de usar o match veio do projeto do Jackson Santana: https://github.com/tryber/sd-013-a-project-movie-card-library-crud/tree/jackson-movie-card-library-crud-project
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((response) => this.setState({ movie: response, loading: false }));
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) return <Loading />;

    // const { title, storyline, imagePath, genre, rating, subtitle } = {};
    const { storyline, imagePath, genre, rating, title, subtitle, id } = movie;
    const editRout = `/movies/${id}/edit`;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to="/">
            VOLTAR
          </Link>
          <Link to={ editRout }>
            EDITAR
          </Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;

export default MovieDetails;
