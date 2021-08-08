import React from 'react';
import PropTypes from 'prop-types';
import Title from './movieformcomponents/Title';
import Subtitle from './movieformcomponents/Subtitle';
import Image from './movieformcomponents/Image';
import Storyline from './movieformcomponents/Storyline';
import Genre from './movieformcomponents/Genre';
import Rating from './movieformcomponents/Rating';
import Button from './movieformcomponents/Button';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  render() {
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;
    return (
      <div>
        <form>
          <Title
            titleValue={ title }
            onChangeInput={ (event) => this.updateMovie('title', event.target.value) }
          />
          <Subtitle
            subtitleValue={ subtitle }
            onChangeInput={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
          <Image
            imageValue={ imagePath }
            onChangeInput={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
          <Storyline
            storylineValue={ storyline }
            onChangeInput={ (event) => this.updateMovie('storyline', event.target.value) }
          />
          <Genre
            genreValue={ genre }
            onChangeInput={ (event) => this.updateMovie('genre', event.target.value) }
          />
          <Rating
            ratingValue={ rating }
            onChangeInput={ (event) => this.updateMovie('rating', event.target.value) }
          />
          <Button onClick={ this.handleSubmit } />
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.string.isRequired,
};

export default MovieForm;
