/**
 The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
 Syntax:
 Object.create(proto)
 Object.create(proto, propertiesObject)

 */

 const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction(); // expected output: "My name is Matthew. Am I human? true"

// Using propertiesObject argument with Object.create()
let o;
o = Object.create(null);
// console.log(o.valueOf()) // Uncaught TypeError: o.valueOf is not a function

o = {};
// is equivalent to:
o = Object.create(Object.prototype);
console.log(o)

o = Object.create(Object.prototype, {
  // foo is a regular 'value property'
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get() { return 10; },
    set(value) {
      console.log('Setting `o.bar` to', value);
    }
/* with ES2015 Accessors our code can look like this
    get() { return 10; },
    set(value) {
      console.log('Setting `o.bar` to', value);
    } */
  }
});
console.log(o)