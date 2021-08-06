import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  componentDidMount() {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    getMovie(id).then((data) => this.setState({ filme: data }));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (!this.state) return <Loading />;
    const { filme: { title, storyline, imagePath,
      genre, rating, subtitle, id } } = this.state;

    return (

      <div data-testid="movie-details">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <br />
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        {/* Source: https://stackoverflow.com/questions/42800815/how-to-use-onclick-event-on-react-link-component */}
        <Link
          to="/"
          onClick={ () => {
            const { deleteMovie } = movieAPI;
            deleteMovie(id);
          } }
        >
          DELETAR

        </Link>

      </div>

    );
  }
}
MovieDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;
export default MovieDetails;
