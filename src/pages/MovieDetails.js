import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovieId();
  }

    fetchMovieId = async () => {
      const { match: { params: { id } } } = this.props;
      const movieId = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie: movieId });
    }

    render() {
      const { movie } = this.state;
      const {
        title,
        subtitle,
        imagePath,
        genre,
        rating,
        storyline,
        id,
      } = movie;

      const { loading } = this.state;
      // Change the condition to check the state
      // if (true) return <Loading />;
      if (loading) {
        return (<Loading />);
      }

      return (

        <div data-testid="movie-details">
          <Link to="/">VOLTAR</Link>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link
            to={ `/movies/${id}/edit` }
          >
            EDITAR
          </Link>
        </div>

      );
    }
}

MovieDetails.propTypes = {
  location: Proptypes.shape({
    state: Proptypes.shape({
      title: Proptypes.string,
      subtitle: Proptypes.string,
      imagePath: Proptypes.string,
      genre: Proptypes.string,
      rating: Proptypes.number,
      storyline: Proptypes.string,
      id: Proptypes.number,
    }),
  }).isRequired,

};
export default MovieDetails;
