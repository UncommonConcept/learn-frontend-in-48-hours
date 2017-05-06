
// Write a promise chain to generate a random greeting!
// In functional programming this would look like:
// genGreeting(genName()) =>> "(Hello there, (Dave))"
//
// Where genGreeting returns "Hello there, <arg>" and
// genName returns a name

function genName() {
  const d = Date.now();
  if(d % 2 === 0) return "Dave";
  else return "Xavier >:)";
}

function genGreeting(name) {
  return 'Hello there, ' + name;
}

function longRunningGenName() {
  return new Promise((resolve, reject) => {
    throw 'Another way!';
    setTimeout(() => {
      reject('I failed :(');
      // resolve(genName());
    }, 2000);
  });
}

Promise.resolve(true)
  .then(() => genName())
  .then(val => console.log(val));

try {
longRunningGenName()
  .then(genGreeting)
  .then(val => console.log(val))
  .catch(err => { console.log('Err: ', err); return 42; })
  .then(val => console.log('What is this? ', val));
} catch(err) {
  console.log('Real err: ', err);
}