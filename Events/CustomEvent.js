/**
*
 * Why using custom events?
 * The custom events allow you to decouple the code that you want to execute after another piece of code completes.
 */

// https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events#event_bubbling
const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

// Create a new event, allow bubbling, and provide any data you want to pass to the "detail" property
const eventAwesome = new CustomEvent('awesome', {
  bubbles: true,
  detail: { text: () => textarea.value }
});

// The form element listens for the custom "awesome" event and then consoles the output of the passed text() method
form.addEventListener('awesome', e => console.log(e.detail.text()));

// As the user types, the textarea inside the form dispatches/triggers the event to fire, and uses itself as the starting point
textarea.addEventListener('input', e => e.target.dispatchEvent(eventAwesome));
