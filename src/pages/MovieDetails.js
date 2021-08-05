import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);// como chamou sem arrow function preicsa do bind para enxergar a propria funcao
    this.delete = this.delete.bind(this);

    this.state = { // perceber que this.state chama com igual e chaves.
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie(); // Por ser chamada quando o componente termina de ser renderizado, comumente a componentDidMount() é usada para fazer requisições a APIs.
  }

  async delete() {
    const { match: { params: { id } } } = this.props; // pegando id da url que fica salva em params
    await movieAPI.deleteMovie(id);
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const onlyMovie = await movieAPI.getMovie(id); // funcao que pega um so filme
    this.setState({ // setState chama com ({
      movie: onlyMovie,
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath,
      genre, rating, subtitle, id } = movie;
    return (
      <div>
        { loading && <Loading /> }
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{`Title: ${title} ` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ this.delete }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  params: PropTypes.objectOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};
export default MovieDetails;
// id chega como string dá para ver isso no params
