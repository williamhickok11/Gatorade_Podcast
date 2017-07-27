import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
require('./favicon.ico'); // Tell webpack to load favicon.ico


render(
    <App
      apiCall = "store/testData.json"
    />,
  document.getElementById('app')
);


// This is for hot reload
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewRoot = require('./components/App').default;
    render(
        <NewRoot />,
      document.getElementById('app')
    );
  });
}
