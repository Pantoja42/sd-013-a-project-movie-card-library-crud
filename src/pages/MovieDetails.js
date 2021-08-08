import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movieInfo: {},
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    movieAPI.getMovie(params.id)
      .then((data) => {
        this.setState({
          loading: false,
          movieInfo: data,
        });
      });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movieInfo } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movieInfo;

    return (
      <div data-testid="movie-details">
        {
          loading
            ? <Loading />
            : (
              <>
                <img alt="Movie Cover" src={ `../${imagePath}` } />
                <p>{ `Title: ${title}` }</p>
                <p>{ `Subtitle: ${subtitle}` }</p>
                <p>{ `Storyline: ${storyline}` }</p>
                <p>{ `Genre: ${genre}` }</p>
                <p>{ `Rating: ${rating}` }</p>
              </>
            )
        }
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
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
