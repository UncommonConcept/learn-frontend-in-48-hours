import { applyMiddleware, createStore, combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history';

import reducers from './reducers';

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = [
  routerMiddleware(history),
];

// Add the reducer to your store on the `router` key
const reducer = combineReducers({
  ...reducers,
  router: routerReducer
});

// Finally, create the store:
const initialState = {};

// Also apply our middleware for navigating
const store = createStore(reducer, initialState, applyMiddleware(...middleware));

// Let's make our lives a little easier:
store.subscribe(() => { console.log('Store changed: ', store.getState()); });

// Just for debugging;
window.getState = store.getState;

export { store, history };
