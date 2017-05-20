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

1. Create `Header.js` and add the following import, aside from the normal required React ones:
```
import { Link, Route } from 'react-router-dom';
```

Now, move the following from App.js into Header.js in the render. You will need a root node, remember:
```
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
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

Add the following content to `App.js`:
```
import Header from './Header';
import Home from './Home';
import About from './About';
import Topics from './Topics';
```

And inside the App component itself, you'll replace the content we removed with:
```
        <Header />

        <Route exact path="/" render={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
```

### Sample pages
Create the following pages, and we'll discuss them in class:

`Home.js`:
```
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
```

`About.js`
```
import React from 'react';

export default () => (
  <div>
    <h2>About</h2>
  </div>
);
```

`Topics.js`
```
import React from 'react';
import { Link, Route } from 'react-router-dom';

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);

export default Topics;
```

### 404 Routes
When no routes match, you add a final catch-all route. Create the following file:
```
import React from 'react';

export default ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);
```

Now, add that component to the end of the routes in `App.js`:
```
<Route component={NoMatch}/>
```

Now load up the app and look at the behavior. What do you notice?

The problem is, when a `Route` is given no `path` parameter, it *ALWAYS* matches. So we need to ensure that our 404 path only matches when nothing else does. We do this using the `Switch` component.

Change the imports from `react-router-dom` to include `Switch`. Now, wrap the routes in that component:

```
        <Switch>
          <Route exact path="/" render={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route component={NoMatch}/>
        </Switch>
```

### Routes with query strings
Query string parsing has been removed from React Router v4 (it did exist in previous versions). The decision has a long a history, but basically the library's designers decided to leave the specific implementation of the query parsing up to the developer _*(do you want an object with key-value pairs? Or do you want an API that dynamically parses the requested field, as in n.get('x')? )*_

Query strings are fairly straightforward. Let's add a query string to our Topics list.

In `Topics.js`, change the `Link` that links to `props-v-state` to add a query parameter, `?answer=props`.

Now, change the `Topic` component at the top of `Topics.js`:

```
const Topic = ({ match, location }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    <p>You answered: {(new URLSearchParams(location.search)).get('answer')}</p>
  </div>
);
```

This demonstrates using the standard browser `URLSearchParams` object to parse the query string. If you want a different implementation, the `'query-string'` NPM package is quite popular.

### Programmatic Routing
Finally, how can we navigate to given routes programmatically?

Add the following to `Topic` inside `Topics.js`:

```
<button onClick={() => history.push('/')}>Go home!</button>
```

Make sure to add `history` as one of the properties imported by `Topic`. Test the button click by clicking it and then using the browser's `Back` button.
