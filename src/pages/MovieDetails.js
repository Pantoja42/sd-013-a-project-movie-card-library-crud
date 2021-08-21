import React, { Component } from 'react';
import Proptypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovieId();
  }

  fetchMovieId = async () => {
    const { location } = this.props;
    const { state } = location;
    const { id } = state;
    const movieId = await movieAPI.getMovie(id);
    this.setState({ loading: false });
    return movieId;
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { location } = this.props;
    const { state } = location;

    const {
      subtitle,
      imagePath,
      genre,
      rating,
      storyline } = state;

    const { loading } = this.state;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
          </div>
        )}
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
