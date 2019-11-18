import React from 'react';
import { render } from 'react-dom';

import App from './components/App'

import '../css/index.css';

// import search from './search';
// import render from './render';
// import text from './text';

// text();

/* if (module.hot) {
  module.hot.accept("./text.js", function() {
    console.log('Hot Module Replacement');
    
    text();
  });
} */

// const id = prompt('Dame un ID');

/* search(id)
  .then(data => render(data))
  .catch(error => console.log(error)); */


render(<App />, document.getElementById('container'));
