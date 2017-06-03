# Connected Components
Up until now we have been using Redux and Jumpstate in almost complete isolation from React. In this section, we will learn how to connect them.

State management only matters if we can somehow get the state, and its data, into the React components that make up our application. There is a package that allows us to do that called `react-redux`. We installed this package at the beginning of the session, and imported its `Provider` component `index.js`, but never discussed what it is actually doing.

`react-redux` also exports a function called `connect`. This function is specifically design to connect your React component to the Redux store. It does this by interacting directly with the `Provider` component that we configured at the very top level of the application component hierarchy.

We want to connect our App component to the store, so that we can display the search results. So let's do that.

# Import the function
Open `src/App.js` and import `connect` from `react-redux`:
```js
import { connect } from 'react-redux';
```

Now, we will change the component that is being exported from the module. Change the module's export expression to the following:

```js
export default connect()(App);
```

What do you notice about this expression? The connect function is actually being called, and obviously returns another function. That function accepts our component as its input.

The second function is actually a new React component that is accepting our component as one of its properties. It connects itself to the Redux store and provides the store to our component in the form of new props.

The `connect` function allows you to define what parts of the state you want to provide to your component. By convention, this function is called `mapStateToProps`. It is provided to `connect` as its first argument. Let's grab the search results from the state and display them in the App component.

Open `src/App.js` and add the following function to the bottom of the file, above the export:

```js
const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
  };
};
```

Now, change our export to use it:
```js
export default connect(mapStateToProps)(App);
```

Next, in the `render` function of `App`, grab the `searchResults` field from the props object:
```js
const { searchResults } = this.props;
```

For now, let's just dump the JSON directly into App using `JSON.stringify()`. I'll leave that to you.


Fire up the app and search for something. Click the button to submit. What happens? Check the console. What do the state changes look like?
