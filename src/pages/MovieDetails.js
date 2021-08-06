import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetch(getMovie);
  }

  async fetch(newGetMovie) {
    const promise = await newGetMovie(1);
    this.setState({
      movies: promise,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movies, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
    const { id } = this.props.match.params;
    const showLonding = () => {
      const verifyLonding = (loading) ? <Loading /> : undefined;
      return verifyLonding;
    };

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        { showLonding() }
        <Link to="`movies/:id/edit`">EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
