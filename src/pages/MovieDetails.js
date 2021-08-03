import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProptTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      MovieDetails: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { match } = this.props;
    const { id } = match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      MovieDetails: { ...movie },
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { MovieDetails } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = MovieDetails;
    const { loading } = this.state;
    if(loading) {
      return <div  data-testid="movie-details"><Loading /></div>;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div  className="movie-det-btns">
        <Link className="movie-det-btn" to="/">VOLTAR</Link>
        <Link className="movie-det-btn" to={ `${id}/edit` }>EDITAR</Link>
        <Link className="movie-det-btn" to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: ProptTypes.string.isRequired,
  params: ProptTypes.string.isRequired,
  id: ProptTypes.string.isRequired,
}

export default MovieDetails;
