import React from 'react';
import ReactDom from 'react-dom';
import App from '../src/components/App';

const rootElement = document.getElementById('app');

ReactDom.render(
    <App />,
  rootElement
);