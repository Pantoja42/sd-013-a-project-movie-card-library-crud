import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imageValue, onChangeInput } = this.props;
    return (
      <div>
        <label htmlFor="movie_image">
          Imagem
          <input
            placeholder="Insira o subtítulo"
            name="imagePath"
            id="movie_image"
            type="text"
            value={ imageValue }
            onChange={ onChangeInput }
          />
        </label>
      </div>
    );
  }
}

Image.propTypes = {
  imageValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Image;
