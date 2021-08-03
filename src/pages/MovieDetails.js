import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {},
      loading: true,
    };
    this.FetchApi = this.FetchApi.bind(this);
  }

  componentDidMount() {
    this.FetchApi();
  }

  async FetchApi() {
    const { match } = this.props;
    const { id } = match.params;
    const movies = await movieAPI.getMovie(id);
    this.setState({ movies, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : (
          <div>
            <p>{ title }</p>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <p> </p>
            <Link to="/">VOLTAR</Link>
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
