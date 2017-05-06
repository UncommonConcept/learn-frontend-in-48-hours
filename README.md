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
4. Move your function from the previous exercise that responds to the GET on the '/' path into this file. Make sure you move or copy (as appropriate) any modules you imported in `index.js` that are required for this function to work!
5. Export the function from `reddit.js` as a _*named export*_
6. Modify `index.js` to import this function as a _*named import*_ and use it in the GET response.

### Routes
Dumping every handlable path in your API into a single file is a recipe for spaghetti code. We will take full advantage of our modules so that we can compartmentalize our routes into individual files.
1. Create a folder inside the `src` directory called `routes`
2. Create a file inside `routes` called `index.js`
3. Inside `index.js` paste the following:
```
var express = require('express');
var router = express.Router();

/* GET reddit index */
router.get('/', function(req, res, next) {
  // You will place your request handler here
});

module.exports = router;
```
Now you will modify your server to use this route.

4. Copy the code from the GET handler in `/index.js` into this new handler
5. Modify `/index.js` to import this new module: `import index from './routes/index';`
6. Finally, remove the existing request handler and replace it with: `app.use('/', index);`

### Discussion about what happened above

### Exercise:
You will now implement the Reddit homepage API paths: `/`, `/top`, `/new`, `/rising` given the structure we have built above. For each path, you will create a new route.

Use the generalized function you wrote in the first exercise to retrieve these. You will be using Promises and async programming to execute this task. Please ask for help if you need help writing these - we don't expect you to know how to do this! You are learning by doing.

Let's get this done in this session. In the next session we will begin building our frontend.