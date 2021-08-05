import React, { Component } from 'react';
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
    const { match: { params: {id} } } = this.props;
    const { getMovie } = movieAPI;

    getMovie(id).then((mov) => {
      this.setState({
        movie: mov,
        loading: false
      });
    });

  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle} = this.state.movie;
    const { match: { params: {id} } } = this.props;
    const {loading} = this.state;

    if (loading) {
      return (<Loading />);
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={"/"}>VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
