/**
* The Object.freeze() method freezes an object. Freezing an object prevents extensions and makes
* existing properties non-writable and non-configurable. A frozen object can no longer be changed:
* new properties cannot be added, existing properties cannot be removed, their enumerability, configurability,
* writability, or value cannot be changed, and the object's prototype cannot be re-assigned.
* freeze() returns the same object that was passed in.
*
* Object.freeze(obj)
*/

// Enum
const collectionTypes = Object.freeze({
    FROM_BUYERS_ONLY: 'from-buyers-only',
    FROM_EACH_ATTENDEES: 'from-each-attendees'
});

console.log(collectionTypes.FROM_BUYERS_ONLY);

console.log(Object.isFrozen(collectionTypes))
