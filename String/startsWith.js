/**
 * The startsWith() method determines whether a string begins with the characters of a specified string,
 * returning true or false as appropriate.
 * startsWith(searchString, position:optional)
 */

const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false

console.log(str1.startsWith('ni'));

console.warn("Polyfill");
/**
 * This method has been added to the ECMAScript 2015 specification and may not be available in all JavaScript implementations yet.
 * However, you can polyfill String.prototype.startsWith() with the following snippet:
 */

if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search, rawPos) {
            var pos = rawPos > 0 ? rawPos|0 : 0;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}