import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
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
    // this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((data) => {
        this.setState({
          movie: data,
          status: 'loaded',
        });
      });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => {
        this.setState({
          shouldRedirect: true,
        });
      });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;

// Referências:
// https://pt-br.reactjs.org/docs/getting-started.html
// https://github.dev/tryber/sd-013-a-live-lectures/tree/lecture/11.2
// https://app.betrybe.com/course/front-end/   ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/o-que-vamos-aprender/cf310dcf-fed4-4322-b0e8-bb188901ca6a?use_case=calendar
// https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/o-que-vamos-aprender/100e758a-a080-4726-a460-a68620a175ae?use_case=calendar
// https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/17
// https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/114
