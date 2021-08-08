import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ onClick }
        >
          Submit
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
