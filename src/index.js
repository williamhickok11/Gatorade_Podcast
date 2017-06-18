
// import { browserHistory } from 'react-router';

// import configureStore from './store/configureStore';
// import './styles/styles.css'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
// import { syncHistoryWithStore } from 'react-router-redux';

// const store = configureStore();

// // Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store);




import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
require('./favicon.ico'); // Tell webpack to load favicon.ico

// const trialClick = funcion()  {
//   console.log("this is a button click")
// }

render(
    <App
      ogPropData = "store/testData.json"
      podIndex = {0}
      // fireClick = {trialClick}
    />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewRoot = require('./components/App').default;
    render(
        <NewRoot />,
      document.getElementById('app')
    );
  });
}
