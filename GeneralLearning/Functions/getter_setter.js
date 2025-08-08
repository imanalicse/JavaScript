/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get, set
 * The get syntax binds an object property to a function that will be called when that property is looked up.
 */
 const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
};

console.log(obj.latest);
// expected output: "c"

/**
 * The set syntax binds an object property to a function to be called when there is an attempt to set that property.
 */
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log);
// expected output: Array ["EN", "FA"]