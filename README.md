# Jumpstate: Handling side effects
Jumpstate not only handles your Redux store via the State object; it also offers a way to handle side effects. Examples of side effects include:

* Triggering additional reducers in response to a single action
* Firing API requests
* Updating local storage or cookies

Jumpstate exports an object called `Effect` that is used to do this.

Let's learn how to use this to make an API request in response to the button click in `src/App.js`.

### Update the store
Open `src/reducers.js` and change the Jumpstate import to include `Effect` and `Actions`:
```js
import { State, Effect, Actions } from 'jumpstate';
```

Add an Effect that will make a network request and update the state:
```js
Effect('downloadPosts', () => {
  return fetch('https://www.reddit.com/top/.json')
    .then(res => res.json())
    .then(body => {
      Actions.savePosts({posts: body.data.children});
    })
});
```

An Effect is defined by a name (that must be unique across the app), and a callback function. **The callback function is actually wrapped in a promise and returned.** Within the Effect we are calling fetch and returning its promise. In the resolve of the fetch, you'll notice that we are calling our `savePosts` reducer, just as we did before.

In just a few lines, we have:
* Created a side effect
* Made a network call
* Updated our state with the resulting data

### Update our Action call in App.js
Open `src/App.js` and change the Action call to call our new Effect:
```js
  Actions.downloadPosts()
    .then(() => console.log('Done!'));
```

You should delete the fake post data we have been using.

Fire up the app and click the button. Take a look at the console and see what we received.

## Using what we have learned
Let's do an exercise with Jumpstate before beginning to integrate it into our app. We will create an input box that we will use to search Reddit.

### Add the input box
Open `src/App.js` and add an input box. Add a `ref` callback to capture the input, so that we can get its value for searching. Put the input box right next the button we have, that triggers the state update.

```js
<input type="text" ref={this.captureInput} />
```

Add the ref callback. I will leave that as an exercise for you.

Now, change the button click to capture the value of the input box:
```js
const search = this.input.value;
```

Make sure to move the `handleClick` function inside the class, remove the `const` modifier, and change the `onClick` property to point to `this.handleClick`

Now, create an Effect that will search reddit:
```js
Effect('searchReddit', (searchTerm) => {
  const url = `https://www.reddit.com/search.json?q=${searchTerm}`;
  return fetch(url)
    .then(res=>res.json())
    .then(body => {
      Actions.saveSearchResults({results: body});
    });
});
```

Now, create the reducer that will store the search results. Update the existing reducer to add an additional function:
```js
const subredditPosts = State({
  ...

  saveSearchResults(state, payload) {
    return {
      ...state,
      searchResults: payload.results,
    };
  },

  ...
});
```

Fire up the app and enter a search term and click the button to search. What do you see on the console when the state changes?
