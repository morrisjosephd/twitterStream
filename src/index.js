import React from 'react';
import ReactDOM from 'react-dom';
import webFont from 'webfontloader';
import 'normalize.css';
import './styles/styles.css'
import App from '../src/components/App'

webFont.load({
    google: {
        families: ['Roboto:300,400,700:latin', 'sans-serif']
    }
});

const rootElement = document.getElementById('app');

ReactDOM.render(
    <App />,
  rootElement
);