# Introduction to Flux & Redux

The Flux state management pattern extends the concept of React as a state machine. Of course, Flux and Redux exist and are happily used outside of React, but the pattern is a very strong complement to React's state machine.

In this group of exercises we will learn how to implement the Flux pattern via a library called Redux. It is not the only popular library out there that implements this pattern; the two most popular others are Alt and Reflux. For a fully fledged solution built on top of React and Redux, the MobX framework offers a completely built-in solution.

We will be learning how to directly bootstrap Redux, because it is important that you know what Redux is doing. Once we know that, we'll be using a library called Jumpstate to handle some of the plumbing for us and redux boilerplate.

# Walkthrough
### Install the redux packages:
```bash
yarn add redux react-redux react-router-redux@next history
```
NOTE: We are not actually using `react-router` or `history` in this exercise, but I want to show you how to set them up so that we know how to integrate them into our Reddit app.

### Bootstrap Redux
Follow along and we will discuss once we've implemented this.

1. Open `src/index.js` and add the following imports:
```
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from './store';
```

2. Create the `Provider` and give it the store; create the `ConnectedRouter` component and give it the history:
```js
const MainApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));
```

### Create the store
Create a file `src/store.js`.

1. Configure our imports:
```
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history';

import reducers from './reducers'; // I know we don't have this file yet.
```

2. Create our history and configure our store inputs:
```js
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
```

```js
// Finally, create the store:
const initialState = {};

// Also apply our middleware for navigating
const store = createStore(reducer, initialState, applyMiddleware(...middleware));
```

```js
// Let's make our lives a little easier:
store.subscribe(() => {
  console.log('Store changed: ', store.getState());
});
```

3. Export the store and history:
```
export { store, history };
```

### Create a simple reducer
Create a file `src/reducers.js`.

Reducers are functions of pure state. I almost never need to import anything in these files. If you do, you are probably doing things in your reducer that you should not be, because external packages suggest your reducer is doing complex data processing, which is innappropriate for a reducer.

1. Create a very simple reducer that looks like this:
```js
const initialState = {
  posts: [],
}

function subredditPosts(state = initialState, action) {
  if(action.type === 'SUBREDDIT_POSTS_DOWNLOADED') {
    return {
      posts: action.payload.posts,
    };
  }

  return state;
}

export default {
  subredditPosts,
};
```

### Create a simple action/action creator
The store is updated via *actions* that are *dispatched* on the store.

1. Create a file called `actions.js`, and put the following:
```js
const savePosts = (posts) => {
  return {
    type: 'SUBREDDIT_POSTS_DOWNLOADED',
    payload: { posts },
  };
};

export {
  savePosts,
};
```

### Finally, use our shiny new Redux setup
1. In `src/App.js` import the store and the action creator we just made:
```
import { store } from './store';
import { savePosts } from './actions';
```

Now, add a button to `src/App.js`. In that button's click handler, place the following:

```
const handleClick = () => {
  const redditPosts = [
    { id: '123', title: 'Post One' }
  ];

  store.dispatch(savePosts(redditPosts));
}
```

Now, run the app and click the button. Look at the command line to see what was printed.

The next branch starts from this completed work and will show you how you can then use this data in your React components.
