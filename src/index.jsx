import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import AppIndex from './components/appindex';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<AppIndex />, root);
}
