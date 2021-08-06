import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.LoadMovie();
  }

  async LoadMovie() {
    // const info = movieAPI.getMovie(id);
  }

  render() {
    const { loading, movie } = this.state;

    return (
      loading ? <Loading /> : this.LoadMovie(movie)
    );
  }
}

export default MovieDetails;
