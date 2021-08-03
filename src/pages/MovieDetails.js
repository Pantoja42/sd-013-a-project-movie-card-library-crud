import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const response = await getMovie(id);
    this.setState({
      movie: response,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { title, subtitle, storyline, genre, imagePath, rating, id } = movie;

    return (
      <section>
        {loading ? <Loading />
          : (
            <div data-testid="movie-details">
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{`Title: ${title}`}</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
              <Link to="/"> VOLTAR </Link>
              <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
            </div>
          )}
      </section>
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
