# Advanced React

I have left a number of comments throughout the exercises to point out where people commonly make mistakes. These are:
* Expecting console.log messages to always accurately display up-to-date information. Remember, Javascript is inherently async, and so is console.log
* Not verifying that props have actually changed in componentWillReceiveProps
* Calling setState in places that cause infinite loops in lifecycle methods, such as setState in componentWillUpdate
* Immediately using the component state after calling setState
* Forgetting to assign a unique key to rendered React elements in an array

I leave it as a classroom exercise to fix these.
