# From this branch forward, we will be building our Reddit application.

### Adding error handlers
In an ideal world, our apps never fail. In the real world, we know that doesn't happen, and we need error handlers.

We will walk through the creation of the error handler code together. You'll be writing these with me, copying from the screen, so you can get a feel for how Express handles requests. After this, we'll use the higher-level abstractions in Express so you won't be writing these directly again.

### In this lesson, we will structure our application the way it will need to be going forward.
We will break our app into:
- Controllers
- Routes

### Let's get started with our controllers
1. Create a folder inside the `src` directory called `controllers`
2. Inside this folder, you will create your functions that execute your _*business logic*_.
3. Create a file called `reddit.js`
4. Move your function from the previous exercise that responds to the GET on the '/' path into this file. Call it `getRedditContent`. Make sure you move or copy (as appropriate) any modules you imported in `index.js` that are required for this function to work!
5. Export the function from `reddit.js` as a _*named export*_
6. Modify `src/index.js` to import this function as a _*named import*_ and use it in the GET response.

### Routes
Dumping every handlable path in your API into a single file is a recipe for spaghetti code. We will take full advantage of our modules so that we can compartmentalize our routes into individual files.
1. Create a folder inside the `src` directory called `routes`
2. Create a file inside `routes` called `home.js`
3. Inside `home.js`, create a new router (just like above!) that handles the `/` path only. Paste the following:
```
import express from 'express';
import { getRedditContent } from '../controllers/reddit';

const router = express.Router();

// Configure the API router
router.use('/', getRedditContent);

export default router;
```

Now we will set up our main API router.

4. Create a file inside `routes` called `index.js`
5. Inside `index.js` paste the following:
```
import express from 'express';
import home from './home';

const router = express.Router();

// Configure the API router
router.use('/', home);

export default router;
```
You'll notice the almost identical nature to the file above! We'll discuss in class why we do this.

Now you will modify your server to use this compound route.

6. Modify `src/index.js` to import this new module: `import api from './routes/index';`
7. Finally, remove the existing request handler and replace it with: `app.use('/', api);`

You'll notice that each router builds upon the ones below it. In this way, the Express Router is said to be a `micro application` of its own - the vast majority of Express's logic is handled by the Router object.

### Discussion about what happened above

# Exercise:
You will now implement the Reddit homepage API paths: `/`, `/top`, `/new`, `/rising` given the structure we have built above. For each path, you will create a new route.

Use the generalized function you wrote in the first exercise to retrieve these. You will be using Promises and async programming to execute this task. Please ask for help if you need help writing these - I don't expect you to know how to do this! You are learning by doing.

Let's get this done in this session. In the next session we will begin building our frontend.

## Bonus points
Can you find a way to do this that does not require creating individual routes for each of `top`, `new`, `rising`?

Hint: You will use URL parameters. Here is an example of handling a URL parameter for a given route:

```
const router = express.Router();

// Set up the category parameter for this route
router.param('category', (req, res, next, category) => {
  req.category = category; // You can assign anything you want to the `req` object - not just plain values. You can create a new object here too if you want!
  next();
});

// GET reddit index
router.get('/:category', getRedditContent);
```

### How would you do this for a subreddit?
Hint: You can also make compound params:

```

router.get('/:sub/:category', getRedditContent);
```