import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = { // Seta o estado inicial
      movie: {},
      loading: 'loading',
      shouldRedirect: false,
    };

    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((data) => {
        this.setState({
          loading: false,
          movie: data,
        });
      });
  }

  // Função que deleta um cartão
  handleRemove() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id)
      .then(() => {
        this.setState({
          shouldRedirect: true,
        });
      });
  }

  render() {
    const { loading, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    if (loading) return <Loading />;

    const { movie: {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } } = this.state;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>
        <button type="button">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </button>
        <button type="button">
          <Link to="/" onClick={ this.handleRemove }>DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;

// Referências:
// https://pt-br.reactjs.org/docs/getting-started.html
// https://github.dev/tryber/sd-013-a-live-lectures/tree/lecture/11.2
// https://app.betrybe.com/course/front-end/   ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/o-que-vamos-aprender/cf310dcf-fed4-4322-b0e8-bb188901ca6a?use_case=calendar
// https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/o-que-vamos-aprender/100e758a-a080-4726-a460-a68620a175ae?use_case=calendar
// https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/17
