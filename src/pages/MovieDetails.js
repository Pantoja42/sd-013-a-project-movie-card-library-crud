import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NewMovie from './NewMovie';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      data: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    return (id === 'new'
      ? this.newMovie()
      : this.findMovie()
    );
  }

  newMovie = () => {
    this.setState({
      data: true,
    });
  }

  movieDetailsRender = () => {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{title}</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }

  findMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovies();
    this.setState({
      movie: response.find((movie) => movie.id === parseInt(id, 10)),
      data: true,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { match: { params: { id } } } = this.props;
    const { data } = this.state;

    if (data === false) {
      return <Loading />;
    }

    return (id === 'new'
      ? <NewMovie />
      : this.movieDetailsRender()
    );
  }
}
// https://stackoverflow.com/questions/47519612/eslint-match-is-missing-in-props-validation-react-prop-types/47519751
// ajuda para escrever essa sintaxe
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
