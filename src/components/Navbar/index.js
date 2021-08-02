import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Navbar extends React.Component {
  render() {
    const { links } = this.props;
    return (
      <nav>
        <div>
          <Link to="/">HOME</Link>
        </div>
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;
