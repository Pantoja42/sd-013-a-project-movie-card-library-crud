import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { titleValue, onChangeInput } = this.props;
    return (
      <label htmlFor="movie_title">
        Título
        <input
          name="title"
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate"
          value={ titleValue }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

Title.propTypes = {
  titleValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Title;
