/**
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match.
If pattern is a string, only the first occurrence will be replaced.
 */

// field-andOrComparisonButton-1
// type.replace(/s?$/, 's')
// key.replace(/\./g, '-')

const classStr = "field-andOrComparisonButton-15342";
console.log(classStr.replace(/-\d*$/, ''));

// continue