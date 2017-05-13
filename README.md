This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Introducing React
This project contains the absolute bare basics needed to create a React application. Create-React-App conceals the true complexity of building a modern front-end application, which involves tools like Babel (which we have seen), Webpack, etc. so that you can focus simply on building your application.

In the next tutorial we will be ejecting this application so we can combine it with our Node backend, but for now let's proceed with learning the basics of React.

# Getting started
Run the project using `yarn start`. Take a look at the generated page.

## JSX & the Component API
Open up `src/App.js` and look at what you see. You see a syntax that is very similar to HTML, along with other syntax that is obviously Javascript. This is called JSX - JavaScript eXtended.

In the course, we will go into a little bit of explanation about JSX, its history, and how it is used.

Next, we will begin learning about React Comoponent props and prop validation.

### Props
1. Open `src/App.js` and look at the `<img>` tag on line 10. What do you notice about this? What is familiar, and what is different from HTML?
2. What is `className`?

#### Let's add some props
1. In `src/App.js`, move down line 6 and add the following on the now-blank line:
```
const { title, content } = this.props;
```
2. Replace `<h2>Welcome to React</h2>` with the following: `<h2>{title}</h2>`
3. Replace the line that says `To get started...` with the following: `{content}`
4. Open `src/index.js`. What do you notice about this file?
5. Add the following two lines to `src/index.js`, AFTER the imports:
```
const title = 'Welcome to React';
const content = <span>To get started, edit <code>src/App.js</code> and save to reload.</span>;
```
Be sure not to add quotes around the `content` line!

6. In `src/index.js`, change `<App />` to the following:
```
<App title={title} content={content} />
```
7. Now run the project. What do you notice?

#### Prop Validation
Since Javascript is not a strongly typed language, React provides a development-only feature to ensure that you are passing the correct props to your components. This is called `Prop Type validation` and is accomplished using a separate package called `prop-types`. Create React App adds this package for us; all we need to do is use it.

1. Open `src/App.js` and add the following import:
```
import PropTypes from 'prop-types';
```
2. Locate this line: `export default App;`. Above that line, add the following:
```
App.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
};
```
Discuss.

3. What happens if no content or title are provided to this component? For example, if this were a presentational component that is nested deeply in a page, perhaps it is a component that on some pages, has no content, but does have a title. How do we specify the required properties, if the page itself does not provide them?

We do this using `Default Props`. To specify these, we use the `defaultProps` key on the component.
4. In `src/App.js`, add the following above the export, again:
```
App.defaultProps = {
  title: 'I like React!',
  content: <div className='container-div'><p>I am the very model of a modern major general!</p></div>,
};
```
React only looks for the `propTypes` and `defaultProps` keys during development. In production (when the NODE_ENV flag was set to `production` when building), this code is a no-op and in fact gets stripped out by Webpack (called `TREE SHAKING`).
5. Now, in `src/index.js`, remove the `content` property from `<App />`. When the page reloads, what do you see for the page content?

#### Events
At the core of any non-trivial web application is the concept of *Events*. These are anything from `onclick` and `onmouseover` to `window.beforeunload` and `navigator.onLine`.

React includes a full cross-browser event system that you can use for the vast majority of events (it does not support events like `window.beforeunload` but you can still handle them. We will see this later). React introduces the concept of a *Synthetic Event*. We will discuss this in class. Let's add some events to our application to see how they work.

1. Open `src/App.js` and add a button below our content paragraph:
```
        <p className="App-intro">
          {content}
        </p>
        <button className='App-Button'>Click me!</button>
```
2. Naturally we want to know when this button is clicked. Add the following to the Button's properties:
```
onClick={this.handleButtonClick}
```
3. Now we need a method to handle this click. Add the following method to the class:
```
handleButtonClick = (event) => {
  console.log('You clicked me!');
  alert('You clicked me!');
}
```