import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <h1 className="NotFound" data-testid="404-error">
        Erro 404: Página não encontrada
      </h1>
    );
  }
}

export default NotFound;
