import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetch(getMovie);
  }

  async fetch(get) {
    const { match: { params } } = this.props;
    const { id } = params;
    const promise = await get(id);
    this.setState({
      movies: promise,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // const card = () => {
    //   const div = document.createElement('div');
    //   div.setAttribute('data-testid', 'movie-details');

    //   const htmlCard = document.createTextNode(`<h4>{ title }</h4>
    //   <img alt="Movie Cover" src={ \`../$\{imagePath}\` } />
    //   <p>{ \`Subtitle: $\{subtitle}\` }</p>
    //     <p>{ \`Storyline: $\{storyline}\` }</p>
    //     <p>{ \`Genre: $\{genre}\` }</p>
    //     <p>{ \`Rating: $\{rating}\` }</p>
    //     <Link to="movies/:id/edit">EDITAR</Link>
    //     <Link to="/">VOLTAR</Link>;`);
    //   div.appendChild(htmlCard);

    //   const srcDiv = document.getElementById('#movie-details');
    //   const section = document.getElementById('#section-movie-details');
    //   if (!srcDiv) {
    //     section.appendChild(div);
    //   }
    // };

    const loadingShow = () => {
      const run = (loading) ? <Loading /> : undefined;
      return run;
    };

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movies;

    return (
      <div data-testid="movie-details">
        {loadingShow()}
        <h4>{ title }</h4>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
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
