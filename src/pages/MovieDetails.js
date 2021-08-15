import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
    };
  }

  async componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const movieDetails = await movieAPI.getMovie(id);
    this.setState({
      movie: movieDetails,
    });
  }

  render() {
    // Change the condition to check the state
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (!title) return <Loading />;

    return (
      <div data-testid="movie-details">
        <h1>{ `Title: ${title}` }</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `${id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
