/**
 * The Map object holds key-value pairs and remembers the original insertion order of the keys.
 * @type {Map<any, any>}
 */
const personMap = new Map();
personMap.set('name', "Iman");
personMap.set('age', 35);
personMap.set('address', { village: "Khalsi", thana: "Daulatpur", district: "Manikganj" });
console.log(personMap);

console.warn('A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.');
for (const [key, value] of personMap) {
  console.log(key, value)
}

console.warn('Iterating Map with forEach()');
personMap.forEach(function(value, key) {
 console.log(key, value);
});

console.warn("Relation with Array objects");
const kvArray = [['key1', 'value1'], ['key2', 'value2']]
// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap = new Map(kvArray);
console.log('Map', myMap)
myMap.get('key1') // returns "value1"
// Use Array.from() to transform a map into a 2D key-value Array
console.log("Array", Array.from(myMap));