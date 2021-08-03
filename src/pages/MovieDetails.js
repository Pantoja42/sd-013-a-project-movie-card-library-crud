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
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

  // Do not use setState in componentDidMount
  fetchDetails = () => {
    const { match: { params: { id } } } = this.props;

    movieAPI.getMovie(id)
    // Resolves
      .then((movie) => this.setState({
        movie,
        loading: false,
      }))
      // Rejects
      .catch((error) => console.log(error));
  }

  renderMovie = () => {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    /* Uso de fragmentos no React, "<>" e "</>", usado para retornar multiplos filhos:
      https://reactjs.org/docs/fragments.html
    */

    return (
      <>
        {/* <React.Fragment> */}
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <br />
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        { /* </React.Fragment> */ }
      </>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : this.renderMovie() }
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
