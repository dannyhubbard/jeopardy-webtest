import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import request from 'superagent';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App request={request} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
