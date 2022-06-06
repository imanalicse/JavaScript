/**
 The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
 */

let regex = /org\/dashboard/;
let url = 'https://olive.doyour.events/b/org/dashboard';
console.log(regex.test(url));

const regex2 = new RegExp('org\/dashboard');
console.log(regex2.test(url));