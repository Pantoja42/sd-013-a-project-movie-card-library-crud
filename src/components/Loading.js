import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-main">
        <div className="loading" />
        <h1>Carregando...</h1>
      </div>
    );
  }
}

export default Loading;
