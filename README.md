# Animations in React

You can create animations in React the same as any other frontend framework; using CSS. But for more interesting animations in React, like animating items in and out of the DOM, pure CSS is not enough - it has no access to the moment an element is created. This is where React provides some additional tools to create compelling animations.

## CSSTransitionGroup
The `react-transition-group`, maintained by a group of React core contributors and originally written by Facebook, provides a set of tools that allow you to create sophisticated animations. We will not examine this library in detail; just enough to see how to do some basic animations using the high-level API, the `CSSTransitionGroup`.

Basically, `CSSTransitionGroup` allows you to specify the CSS classes that should apply to an element at various points of its lifecycle. **This is different than the React component lifecycle**. This lifecycle specifically refers to the Component's DOM node's life in the browser itself - the moment is appears in the DOM, the moment it gets removed, etc.

We will add a simple example of animating in the content containers to demonstrate how to use the library; this application is not a good candidate where animations are needed to improve the experience.

# Installation
1. Install the package: `yarn add react-transition-group`
2. Open up `client/src/Content/Content.js` and add the import: `import { CSSTransitionGroup } from 'react-transition-group';`
3. We are going to wrap the 3 content columns in this file in a new component. Currently, they are nested inside the div `<div className="App-intro container-fluid no-padding">`. Instead, nest these three columns inside the following:

```js
<CSSTransitionGroup
  transitionName="example"
  transitionEnterTimeout={500}
  transitionLeaveTimeout={300}>

  put the 3 columns here!

</CSSTransitionGroup>
```
4. Now we need to add the matching CSS classes. Add the following to `client/src/Content/Content.css`:

```css
.App-layout-col-left, .App-layout-col-content, .App-layout-col-right {
  position: relative;
}

.example-enter {
  opacity: 0.01;
  top: -50px;
}

.example-enter.example-enter-active {
  opacity: 1;
  top: initial;
  transition: opacity 500ms ease-in, top 500ms ease-in;
}

.example-leave {
  opacity: 1;
}

.example-leave.example-leave-active {
  opacity: 0.01;
  top: -50px;
  transition: opacity 300ms ease-in, top 500ms ease-in;
}
```

You'll notice that the transition timings match the values that were given to React. This is so that React can orchestrate adding and removing the classes at the same time the browser is rendering the CSS transitions. These don't need to match - you can create some interesting patterns by making them different.

What **DOES** need to match is the word `example`. You passed that as the `transitionName` to the `CSSTransitionGroup` component; it **MUST** match the prefix you see on the CSS classes.

That concludes this exercise. There is obviously a ton more you can do with this; and there are a growing number of libraries designed to make it simple and declarative.

# Complete the Reddit application
We will use the rest of our time to complete the application. We need to see the following:
1. Implement the API calls for both the Reddit homepage (and categories), and all the subreddits (and categories). These should be called on route changes, that is, when you click the link to navigate to a different Subreddit or category.
2. Completely implement the searching
3. Build a component to display the Reddit post entries, and render it in the content area
4. The post area should not display all posts. The easy thing to do is make the content box scroll. Even better, let's implement paging. Remember, Reddit pages by using the `after` parameter in the request; the value is the ID of the last post you currently see.
5. Build the dropdown list of available subreddits. There are over 10,000 of them, which is why Reddit does not provide such a list, but we will make a simple one using the following list of subreddits. You can use your own of course, but for the lazy here are the top 20:

```
const subreddits = [
  'AskReddit',
  'funny',
  'todayilearned',
  'science',
  'worldnews',
  'pics',
  'IAmA',
  'gaming',
  'videos',
  'movies',
  'news',
  'Music',
  'aww',
  'gifs',
  'explainlikeimfive',
  'askscience',
  'EarthPorn',
  'books',
  'television',
  'LifeProTips',
];
```