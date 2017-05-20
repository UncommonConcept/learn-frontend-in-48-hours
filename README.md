# React-Router

Up to now, we have only focused on how to create components, and how to React within a single component or a component tree. What we have not talked about yet is the concept of *Pages*, which any non-trivial app will certainly contain.

But we immediately run into a problem when we think about creating pages within our application: Given that React applications are designed to run entirely in the browser, and bundles of javascript and CSS are downloaded whenever we hit the server, we suddenly bring in a great deal more overhead to navigate between pages.

Thus, the concept of routing was born in modern javascript applications. All major frontend frameworks, including React, include some form of routing.

In React, there are several routing solutions. The most common of them is _*react-router*_. This exercise will walk us through a very, very simple application to understand how to implement it.

Later, we will apply what we learned to our Reddit application.

# Install & setup
1. Begin by installing the package:
`yarn add react-router`

2. Add the router to the root of the app. We actually need to create it!
```
import React, { Component } from 'react'

export default class Root extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
```

What does this component do? This component will be rendered on every single page. It sits at the absolute highest level of the application. The `props.children` value will contain the component we are supposed to render. The beautiful part is - you do not need to worry about *how* this happens: only where to put the component!

3. Add a core router
* Create a file called routes.js
* In that file, place the following:
```
import React from 'react';
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import Root from './Root';

const router = () => (
<Router history={browserHistory}>
  <Route path="/" component={Root}>
  </Route>
</Router>);

export default router;
```

4. Change `routes.js` to include the following:
```
import App from './App';

...
<Route path="/" component={Root}>
  <IndexRoute component={App} />
</Route>

```

5. Finally, render our Router in place of the App itself in `index.js`:
Change `import App from './App';` to: `import Router from './routes';`

Change the `ReactDOM.render` call to now use our Router as the core component:

```
ReactDOM.render(<Router />, document.getElementById('root'));
```

In the next session, we will investigate how React Router works, how to add various types of routes, and what props it provides our top level components.
