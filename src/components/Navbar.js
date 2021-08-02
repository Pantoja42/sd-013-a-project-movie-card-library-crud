import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Navbar extends React.Component {
  render() {
    const { links } = this.props;
    return (
      links.map((link) => (
        <Link
          key={ link.url }
          to={ link.url }
        />
      ))
    );
  }
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;
