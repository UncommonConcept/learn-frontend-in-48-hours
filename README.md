# Jumpstate: Handling side effects
Jumpstate not only handles your Redux store via the State object; it also offers a way to handle side effects. Examples of side effects include:

* Triggering additional reducers in response to a single action
* Firing API requests
* Updating local storage or cookies

Jumpstate exports an object called `Effect` that is used to do this.

Let's learn how to use this to make an API request in response to the button click in `src/App.js`.

### Update the store
Open `src/reducers.js` and change the Jumpstate import to include `Effect`:
```js
import { State, Effect } from 'jumpstate';
```

Add an Effect that will make a network request and update the state:
```js
Effect('downloadPosts', () => {
  return fetch('http://reddit.com/top/.json')
    .then(res => res.json())
    .then(body => {
      Actions.savePosts(body.data.children);
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
Actions.downloadPosts();
```

You should delete the fake post data we have been using.

Fire up the app and click the button. Take a look at the console and see what we received.
