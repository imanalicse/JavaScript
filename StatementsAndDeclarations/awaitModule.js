/** Top level await
You can use the await keyword on its own (outside of an async function) within a JavaScript module.
This means modules, with child modules that use await, wait for the child module to execute before they themselves run.
All while not blocking other child modules from loading.
*/

// fetch request
const colors = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json());

export default await colors;
