# React-Router

In this set of exercises, we are going to learn how to use React Router and its various features. Among these:

* Menus
* Exact route matching
* Fuzzy route matching with <Switch>
* Route params
* Route queries
* 404 routing
* The Link component
* Programmatic route control with `history`

## Build the exercise pages

We will examine React Router's features by building a set of sample pages to demonstrate its functionality. This is a very simple app we will use to understand Router before we attempt to build this into our Reddit application.

We already have our Root component and our App. We will be adding a simple navigation menu and set of sub pages.

### A simple menu
Let's create a Header component like we did in the previous exercises. Only this time we will be using it differently!

1. Create Header.js and add the following import, aside from the normal required React ones:
```
import { Link, Route } from 'react-router-dom';
```

Now, move the following from App.js into Header.js in the render. You will need a root node, remember:
```
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
```

Add the following to the Header.js component, below the `App-header` div:
```
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr/>
```

Add the required CSS to App.css to make our menu a bit more usable:
```
ul {
  list-style: none;
  text-align: center;
}

ul > li {
  display: inline-block;
  margin: 0 10px;
}

ul > li:first-child {
  margin-left: 0;
}

ul > li:last-child {
  margin-right: 0;
}
```