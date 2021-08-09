import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: {},
      shouldRedirect: false,
    };
    this.getMovie = this.getMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({ loading: true },
      async () => {
        const fetchMovie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: fetchMovie,
        });
      });
  }

  setShouldRedirect() {
    this.setState(() => ({ shouldRedirect: true }));
  }

  deleteMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.deleteMovie(id);
    this.setShouldRedirect();
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
    const { movie, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{title}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <button type="submit" onClick={ this.deleteMovie }>DELETAR</button>
        {/* <Link to={ `/movies/delete/${id}` }>DELETAR</Link> */}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
