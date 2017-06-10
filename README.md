# Styling in React

Styling your application in React is substantially similar to most other frameworks. You still use CSS, and you can optionally use any number of frameworks to aid in managing your CSS, including SASS, LESS, Stylus, CSS-Modules, etc.

There are a growing number of solutions written to help manage CSS within your Javascript, under the philosophy of co-locating your CSS with the JS of the component to which it belongs. Angular itself formalizes this relationship by requiring a component's CSS to be co-located with the component.

Some of these solutions are:
- Aphrodite
- Radium
- styled-components
- jsxstyle
- styled-jsx
- React Style

This is not an exhaustive list but these are the most popular.

However, the best practices and the most well-maintained solutions have not emerged yet, so I will instead focus on what HAS emerged as best practice, and the tools we use to manage them.

***It is not necessary to use any tooling at all***. React is just as happy using plain CSS as any framework. Only pick a framework if the capability it adds to your development is worth the complexity it adds to your application. Using the `css-loader` in webpack, you are more than capable of producing a perfectly functional CSS bundle.

# SCSS
LESS used to be the most popular "CSS Framework", but it has been quickly replaced with SCSS. SCSS is more succinct, stylistically more similar to plain CSS, more powerful, and has better tooling. It allows your CSS to be more semantically meaningful than vanilla CSS, and has quickly become the most popular choice for CSS maintenance.

### Features
**SCSS is just CSS** with a bit of syntactic sugar on top of it. The primary feature is the ability to nest classes, in the same structure as you nest your DOM elements:

```css
.some-class {
  display: block;
  color: blue;

  &.sibling-class {
    color: red;
  }

  & .some-deeper-class {
    color: white;
  }
}
```

The second killer feature of **SCSS** is its support for variables. You can easily theme an entire application by maintaing a standard color palette, and using the variable names everywhere:

```css
$highlight-color: #FF0;
$background-color-dark: #011;

.main-container {
  background-color: $background-color-dark;
}
```

The tooling for SCSS is extremely well developed for React and Webpack. Some of the tools are already installed in our application, and you can see them in the `client/config/webpack.config.*.js` files:

* `style-loader` - collects all CSS from everywhere and either dumps it into the `<head>` of your page, or into a CSS bundle file.
* `css-loader` - captures the `import './styles.css'` and `require('./styles.css')` calls inside your app
* `postcss-loader` - pluggable pre-processor for your CSS to add things like vendor prefixes, remove unnecessary styles, and add source maps
* `autoprefixer` - this is the tool that plugs into `postcss` to actually add vendor prefixes

We require a few more tools to add support for SCSS. We will proceed to install them now.

## Installation
1. `yarn add --dev sass-loader node-sass`
2. Add the loader configuration to webpack. Open `client/config/webpack.config.dev.js`, find the css loader, and add an additional entry below it:
```js
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      },
```

The resulting config should look like:
```js
...
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // In production, we use a plugin to extract that CSS to a file, but
      // in development "style" loader enables hot editing of CSS.
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      // Our new loader is here
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      },
      // JSON is not enabled by default in Webpack but both Node and Browserify
      // allow it implicitly so we also enable it.
      {
        test: /\.json$/,
        loader: 'json'
      },
...
```
3. Add `/\.scss$/,` to the list of url-loader exclusions on line 115 in the webpack config
4. Use scss files!
5. Rename `client/src/Header/RedditMenu.css` to `RedditMenu.scss`
6. Open `client/src/Header/RedditMenu.js` and change the imported CSS filename to match
7. In `RedditMenu.scss`, change lines 35-60 (there are 3 groups of CSS classes) to be nested SCSS. We can do this together.
8. Run the app. You should see the app continue to work like normal.

