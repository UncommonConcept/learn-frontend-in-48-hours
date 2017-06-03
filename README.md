# Jumpstate: Getting rid of the boilerplate

Redux is an amazing library, but it is just the infrastructure for more complex systems. Using it directly is fine, and you should know when you don't even need Redux. But if you want to use it in more sophisticated applications, the boilerplate for Redux gets tiresome:

1. Define the action constant
2. Define a new action creator
3. Define a new reducer
4. Add the reducer to the reducers list
* Add the action creator and dispatch calls to your component

In an even semi-complex app, this can become unmaintainable very quickly. There are a growing number of solutions to reduce the boilerplate; in this course we will examine one of my favorites called [Jumpstate](https://github.com/jumpsuit/jumpstate/). Jumpstate collapses steps 1-4 into a single step. In this exercise we will see how that happens.

# Install
`yarn add jumpstate`

# Add the Jumpstate middleware to the store
In store.js, add the following import:

```js
import { CreateJumpstateMiddleware } from 'jumpstate';
```

Update the store middleware to include the Jumpstate middleware:
```js
const middleware = [
  CreateJumpstateMiddleware(),
  routerMiddleware(history),
];
```

# Update your reducer
Change `src/reducers.js` to look import Jumpstate:

```js
import { State } from 'jumpstate';
```

Now, we will alter our reducer to use Jumpstate:
```js
const subredditPosts = State({
  initial: {
    posts: [],
  },

  savePosts(state, payload) {
    return {
      ...state,
      posts: payload.posts,
    };
  },
});

export default {
  subredditPosts,
};
```

You will notice that the function inside the State object is the same name as the action creator we have in the `src/actions.js` file. In fact - go ahead and delete the file. It is no longer needed.

In Jumpstate, the State object serves as action, action creator, and reducer, all rolled into one. This makes managing your state processing code much more straightforward.

## Using Jumpstate
If you noticed, the problem with dispatching action creators everywhere is that you need to import 2 things, everywhere you want to interact with the state:

1. The store, in order to call dispatch()
2. The action creators you want to dispatch

This also can get difficult to manage in any reasonably sized application. Jumpstate provides a singleton called `Actions` that performs both of these tasks for you, so that all you ever need to import is `Actions`. Let's modify `src/App.js` to do just that.

### Update App.js
Open `src/App.js` and delete the store and action imports.

Now add the Jumpstate import:
```js
import { Actions } from 'jumpstate';
```

Now replace the following line:
```js
store.dispatch(savePosts(redditPosts));
```

With the Jumpstate version:
```js
Actions.savePosts({posts: redditPosts});
```

Simpler, no?

### Reading the state
In our initial setup in `src/store.js`, we added a subscriber to the state to print out the state whenever it changes:
```
store.subscribe(() => { console.log('Store changed: ', store.getState()); });
```

In this, we are calling `store.getState()` to get the current state. The problem is, again, we need to import the store everywhere to do this. The problem with that is, some Redux setups do not allow you to create or import a store singleton - we have only done that in this application because it was easy to do. In some apps, the store is created in a place where it cannot be easily extracted. So how can we get access to the current state?

Jumpstate provides a `getState` singleton that allows you to get the state anywhere in your app. Let's change our printing function in `src/store.js` to use it:

```
import { getState } from 'jumpstate';
```

Now change the console log to use it:
```
store.subscribe(() => { console.log('Store changed: ', getState()); });
```

### Summary
What we have used so far is fairly simple. We will see in a later lesson how to connect all of this to React, and how useful these utilities really are.
