import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ loading: true }, async () => {
      const data = await movieAPI.getMovie();
      this.setState({
        loading: false,
        movie: data,
      });
    });
  };

  render() {
    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div data-testid='movie-details'>
            <img alt='Movie Cover' src={`../${imagePath}`} />
            <h2>{title}</h2>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            <Link to='/'>VOLTAR</Link>
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetails;
