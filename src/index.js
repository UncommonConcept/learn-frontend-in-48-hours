import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const MainApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
