import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then(this.setState({
        shouldRedirect: true,
      }));
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;

// Referências:
// https://pt-br.reactjs.org/docs/getting-started.html
// https://github.dev/tryber/sd-013-a-live-lectures/tree/lecture/11.2
// https://app.betrybe.com/course/front-end/   ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/o-que-vamos-aprender/cf310dcf-fed4-4322-b0e8-bb188901ca6a?use_case=calendar
// https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/o-que-vamos-aprender/100e758a-a080-4726-a460-a68620a175ae?use_case=calendar
// https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/17
