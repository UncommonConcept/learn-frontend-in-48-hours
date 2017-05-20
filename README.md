# React-Router

Up to now, we have only focused on how to create components, and how to React within a single component or a component tree. What we have not talked about yet is the concept of *Pages*, which any non-trivial app will certainly contain.

But we immediately run into a problem when we think about creating pages within our application: Given that React applications are designed to run entirely in the browser, and bundles of javascript and CSS are downloaded whenever we hit the server, we suddenly bring in a great deal more overhead to navigate between pages.

Thus, the concept of routing was born in modern javascript applications. All major frontend frameworks, including React, include some form of routing.

In React, there are several routing solutions. The most common of them is _*react-router*_. This exercise will walk us through a very, very simple application to understand how to implement it.

Later, we will apply what we learned to our Reddit application.

# Install & setup
1. Begin by installing the package:
`yarn add react-router-dom`

2. Add the router to the root of the app. We actually need to create it! So create a file `Root.js` at the app root.
```
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import App from './App';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </BrowserRouter>
    )
  }
}
```

What does this component do? This component will be rendered on every single page. It sits at the absolute highest level of the application. The child routes immediately below this component are listed within it. Each Route component specifies the component it renders when the route it matches is visited. The beautiful part is - you do not need to worry about *how* this happens: only where to put the component and how to structure your routes.

3. Render our Root component in place of the App itself in `index.js`:
Change `import App from './App';` to: `import Root from './Root';`

Change the `ReactDOM.render` call to now use our Router as the core component:

```
ReactDOM.render(<Root />, document.getElementById('root'));
```

In the next session, we will investigate how React Router works, how to add various types of routes, and what props it provides our top level components.
