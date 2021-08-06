import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      infoMovie: 'a',
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    await movieAPI.getMovie(match.params.id).then((infos) => this.setState({
      infoMovie: infos,
    }));
  }

  apagaMovie = (idMovie) => {
    movieAPI.deleteMovie(idMovie);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    /* const { title, storyline, imagePath, genre, rating, subtitle } = this.state; */
    const { infoMovie } = this.state;
    if (infoMovie === 'a') {
      return <Loading />;
    }
    console.log(infoMovie.title);
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${infoMovie.imagePath}` } />
        <p>{ `Title: ${infoMovie.title}` }</p>
        <p>{ `Subtitle: ${infoMovie.subtitle}` }</p>
        <p>{ `Storyline: ${infoMovie.storyline}` }</p>
        <p>{ `Genre: ${infoMovie.genre}` }</p>
        <p>{ `Rating: ${infoMovie.rating}` }</p>
        <Link to={ `/movies/${infoMovie.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link
          onClick={ () => { this.apagaMovie(`${infoMovie.id}`); } }
          to="/"
        >
          DELETAR
        </Link>
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
};

MovieDetails.defaultProps = {
  match: {},
};
export default MovieDetails;
