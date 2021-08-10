import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      load: false,
    };
    this.LoadMovie = this.LoadMovie.bind(this);
  }

  componentDidMount() {
    this.LoadMovie();
  }

  async LoadMovie (){
    const { match: { params: { id } } } = this.props;
    const request = await movieAPI.getMovie(id);
    this.setState({
      movie: request,
      load: true,
    });
  }

  render() {
    const { movie, load } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const aux = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR </Link>
        <Link to="/">VOLTAR</Link>
      </div>);
    return (
      load ? aux : <Loading />
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
