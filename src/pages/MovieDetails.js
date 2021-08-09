import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    // const { props } = this;
    // const { match } = props;
    // const { params } = match;
    // const { id } = params;
    const { props: { match: { params: { id } } } } = this;
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        movie: data,
        loading: false,
      });
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { props: { match: { params: { id } } } } = this;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
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
