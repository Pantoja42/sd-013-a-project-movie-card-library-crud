import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      load: true,
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = async () => {
    // const filme = await movieAPI.getMovies();
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const filme = await getMovie(id);
    this.setState(() => ({
      movie: filme,
      load: false,
    }));
  }

  render() {
    // Change the condition to check the state
    const { movie, load } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div>
        {load ? <Loading />
          : (
            <div data-testid="movie-details">
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <h2>{`Title: ${title}`}</h2>
              <h3>{ `Subtitle: ${subtitle}` }</h3>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to="/"> VOLTAR </Link>
              <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
              <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }> DELETAR </Link>
            </div>
          )}
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
