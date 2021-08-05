import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';// não esquecer de chamar redirect , link do react roter dom
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const onlyMovie = await movieAPI.getMovie(id);// usar a funcao getMovie e não getMovies, porque é só um filme.Zezé disse que é semelhante ao shopping cart que quando busca só um produto faz a requisição na api de novo.
    this.setState({
      status: 'carregou',
      movie: onlyMovie,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state; // não esquecer de chamar o estado
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }
    if (status === 'loading') {
      return (
        <Loading />
      );
    }
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
// a parte de proptypes é o código do Pedro quando estudei junto com ele, com explicação da Luiza
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
